/**
 * ### Отчет _Движение денег_ (невизуальная часть)
 *
 * @module rep_cash_moving
 *
 * Created 07.11.2016
 */

import RepParams from '../../components/RepCashMoving/RepParams';

export default function ($p) {

  $p.RepCash_moving = class RepCash_moving extends $p.RepCash_moving {

    // ресурсы по умолчанию
    // TODO: сделать признак в метаданных
    get resources() {
      return ['debit', 'credit', 'initial_balance', 'final_balance'];
    }

    /**
     * пересчитывает данные в табличной части - запрос к серверу с фильтром по параметрам
     * @param scheme
     */
    prepare(scheme) {
      const {moment} = $p.utils;
      const {pouch} = $p.adapters;
      const {date_from, date_till, query} = scheme;
      const {data} = this;
      const date_sub = moment(date_from).subtract(1, 'day').toDate();
      const query_options = {
        reduce: true,
        limit: 100000,
        group: true,
        group_level: 4,
        startkey: [],
        endkey: [date_sub.getFullYear(), date_sub.getMonth() + 1, date_sub.getDate(), '\ufff0']
      };
      const start_total = {};
      const default_query = 'rep/cash_moving_date_cashbox';

      // признак варианта
      const by_cashboxes = query == default_query;

      // массив гвидов касс
      const cashboxes = [];
      this.cashboxes.forEach((row) => cashboxes.push(row.cashbox.ref));

      // массив гвидов статей ддс
      const cash_flow_articles = [];
      this.cash_flow_articles.forEach((row) => cash_flow_articles.push(row.cash_flow_article.ref));


      // фильтр для отбрасывания лишних строк
      function discard(key) {
        return by_cashboxes ?
          cashboxes.length && cashboxes.indexOf(key[3]) == -1
          :
          cash_flow_articles.length && cash_flow_articles.indexOf(key[2]) == -1;
      }

      if(by_cashboxes){
        // получаем начальные остатки
        return pouch.local.doc.query(scheme.query || default_query, query_options)
          .then((res) => {
            if(res.rows) {
              res.rows.forEach(({key, value}) => {
                if(discard(key)) {
                  return;
                }
                if(!start_total.hasOwnProperty(key[3])) {
                  start_total[key[3]] = [0, 0, 0, 0];
                }
                start_total[key[3]][0] += value.total;
                start_total[key[3]][3] = start_total[key[3]][0];
              });
            }

            query_options.startkey = [date_from.getFullYear(), date_from.getMonth() + 1, date_from.getDate(), ''];
            query_options.endkey = [date_till.getFullYear(), date_till.getMonth() + 1, date_till.getDate(), '\ufff0'];

            return pouch.local.doc.query(scheme.query || default_query, query_options);
          })
          // получаем обороты
          .then((res) => {
            if(res.rows) {
              res.rows.forEach(({key, value}) => {
                if(discard(key)) {
                  return;
                }
                if(!start_total.hasOwnProperty(key[3])) {
                  start_total[key[3]] = [0, value.debit, value.credit, value.total];
                }
                else {
                  start_total[key[3]][1] += value.debit;
                  start_total[key[3]][2] += value.credit;
                  start_total[key[3]][3] += value.debit - value.credit;
                }
              });
              for (const key in start_total) {
                const row = start_total[key];
                data.add({
                  cashbox: key,
                  initial_balance: row[0],
                  debit: row[1],
                  credit: row[2],
                  final_balance: row[3]
                });
              }
            }
            return res;
          });
      }

      // если нужны только обороты, результат получаем "в лоб" - прямым запросом к couchdb
      query_options.startkey = [date_from.getFullYear(), date_from.getMonth() + 1, ''];
      query_options.endkey = [date_till.getFullYear(), date_till.getMonth() + 1, '\ufff0'];
      return pouch.local.doc.query(query, query_options)
        .then((res) => {
          if(res.rows) {
            res.rows.forEach(({key, value}) => {
              if(discard(key)) {
                return;
              }
              data.add({
                period: new Date(`${key[0].pad(4)}-${key[1].pad(2)}-01`),
                cash_flow_article: key[2],
                debit: value,
              });
          });
          return res;
        }
      });
    }

    /**
     * Фильтр по отбору схемы + свёртка по измерениям + группировка по схеме
     */
    calculate() {
      const {data, scheme, resources, _manager} = this;
      const _columns = scheme.rx_columns({
        mode: 'ts',
        fields: _manager.metadata('data').fields,
        _obj: this
      });

      // чистим таблицу результата
      data.clear();
      if(!data._rows) {
        data._rows = [];
      }
      else {
        data._rows.length = 0;
      }

      return this.prepare(scheme)
        .then(() => {

          // TODO фильтруем по отбору

          // сворачиваем результат и сохраняем его в data._rows
          const dims = [], ress = [];
          _columns.forEach(({key}) => {
            if(resources.indexOf(key) != -1) {
              ress.push(key);
            }
            else {
              dims.push(key);
            }
          });
          scheme.dims().forEach((key) => {
            if(dims.indexOf(key) == -1) {
              dims.push(key);
            }
          });
          data.group_by(dims, ress);

          // группируем по схеме
          let grouped = false;
          scheme.dimensions.find_rows({use: true}, ({field}) => {

            // TODO в группировке может потребоваться разыменовать поля

            // TODO итоги надо считать не по всем русурсам и с учетом формулы

            // TODO сейчас набор полей не поддержан в интерфейсе, но решаем сразу для группировки по нескольким полям
            for(const dim of field.split(',')) {
              const sql = `select ${ress.map(res => `sum(${res}) as ${res}`).join(', ')} from ? ${
                // это общий итог или группировка по полю?
                dim ? 'group by ' + dim : ''
                }`;
              // TODO возможно, в alasql надо передавать не массив примитивов, а массив DataObj
              const res = $p.wsql.alasql(sql, [data._obj]);
              for(const row of res){
                const fld = dim ? dim : _columns[0].key;
                if(!row[fld]){
                  row[fld] = {presentation: 'Σ'};
                };
                row.row = '0-0';
                data._rows.push(row);
                row.children = [];
                data.forEach((sub) => {
                  row.children.push(sub);
                });
              }

              grouped = true;
            }

          });

          // или заполняем без группировки
          !grouped && data.forEach((row) => {
            data._rows.push(row);
          });
        });
    }

  };

  /**
   * Класс-компонент панели параметров отчета
   * @type {RepParams}
   */
  $p.rep.cash_moving.RepParams = RepParams;

}



