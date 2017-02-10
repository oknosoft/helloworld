/**
 * ### Отчет _Движение денег_
 *
 * @module rep_cash_moving
 *
 * Created 07.11.2016
 */

export default function ($p) {

	const {characteristics, nom, nom_kinds, clrs} = $p.cat

	// свойства объекта отчета _Потребность по материалам_
	Object.defineProperties($p.RepCash_moving.prototype, {

		resources: {
			value: ['debit','credit','initial_balance','final_balance']
		},

		// пересчитывает данные в табличной части
		prepare: {

			value: function() {

				const {moment} = $p.utils;
				const {pouch} = $p.adapters;
				const {period_from, period_till} = this;
				const date_sub = moment(period_from).subtract(1, 'day').toDate();
				const query_options = {
						reduce: true,
						limit: 10000,
						group: true,
						group_level: 4,
						startkey: [],
						endkey: [date_sub.getFullYear(), date_sub.getMonth()+1, date_sub.getDate(),"\uffff"]
					};
				const res = {
						data: []
					};
				const start_total = {};
				const cashboxes = [];

				this.cashboxes.forEach((row) => {
					cashboxes.push(row.cashbox.ref);
				});

				function filter(row) {
					return cashboxes.length && cashboxes.indexOf(row.key[3]) == -1;
				}

				return pouch.local.doc.query("doc/cash_moving_date_cashbox", query_options)

					.then((data) => {

						if(data.rows){
							data.rows.forEach((row) => {

								if(filter(row)){
									return;
								}

								if(!start_total.hasOwnProperty(row.key[3])){
									start_total[row.key[3]] = [0,0,0,0];
								}

								start_total[row.key[3]][0] += row.value.total;
								start_total[row.key[3]][3] = start_total[row.key[3]][0];

							});
						}

						query_options.startkey = [period_from.getFullYear(), period_from.getMonth()+1, period_from.getDate(), ""];
						query_options.endkey = [period_till.getFullYear(), period_till.getMonth()+1, period_till.getDate(),"\uffff"]

						return pouch.local.doc.query("doc/cash_moving_date_cashbox", query_options)
					})
					.then((data) => {

						if(data.rows){

							data.rows.forEach((row) => {

								if(filter(row)){
									return;
								}

								if(!start_total.hasOwnProperty(row.key[3]))
									start_total[row.key[3]] = [0,row.value.debit,row.value.credit,row.value.total];
								else{
									start_total[row.key[3]][1] += row.value.debit;
									start_total[row.key[3]][2] += row.value.credit;
									start_total[row.key[3]][3] += row.value.debit - row.value.credit;
								}

							});

							for(var key in start_total){
								var row = start_total[key];
								res.data.push([
									$p.cat.cashboxes.get(key),
									row[0],
									row[1],
									row[2],
									row[3]
								]);
							}


						}

						return res;
					});
			}

		},

		// сворачивает табличную часть с учетом выбранных колонок
		calculate: {
			value: function (_columns) {

				const {data, resources} = this;

				// чистим таблицу результата
				data.clear();
				if(!data._rows){
					data._rows = []
				}else{
					data._rows.length = 0;
				}

				return this.prepare()

					.then((ares) => {

						let resrow = data.add()

						return Promise.all([])

					})

					.then(() => {

						// сворачиваем результат и сохраняем его в data._rows

						const dims = [], ress = [];
						_columns.forEach(fld => {
							const {key} = fld
							if(resources.indexOf(key) != -1){
								ress.push(key)
							}else{
								dims.push(key)
							}
						})
						data.group_by(dims, ress);
						data.forEach((row) => {

							// округление
							row.initial_balance = 1;
							row.debit = 2;
							row.credit = 3;
							row.final_balance = 4;

							data._rows.push(row);
						})

					})
			}
		},

	})

}


