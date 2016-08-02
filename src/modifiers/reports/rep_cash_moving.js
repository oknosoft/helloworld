/**
 * ### Отчет Движение денег
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 * @module rep_cash_moving
 * Created 01.08.2016
 */

function form_rep(pwnd, attr) {

	var _mgr = this,
		_meta = _mgr.metadata(),
		wnd, options, _title, close_confirmed;

	/**
	 * ПриСозданииНаСервере - инициализация при создании формы, до чтения объекта
	 */
	function frm_create(){


		// создаём и настраиваем окно формы
		if((pwnd instanceof dhtmlXLayoutCell || pwnd instanceof dhtmlXSideBarCell || pwnd instanceof dhtmlXCarouselCell)
			&& (attr.bind_pwnd || attr.Приклеить)) {

			// если вернулись на ту же самую закладку, ничего делать не надо
			if(wnd == pwnd && wnd._mgr == _mgr)
				return;

			// форма объекта приклеена к области контента или другой форме
			if(typeof pwnd.close == "function")
				pwnd.close(true);

			wnd = pwnd;
			wnd.close = function (on_create) {
				var _wnd = wnd || pwnd;

				if(on_create || check_modified()){

					if(_wnd){

						if(_wnd.conf){
							_wnd.detachToolbar();
							_wnd.detachStatusBar();
							_wnd.conf.unloading = true;
							_wnd.detachObject(true);
						}
					}
					frm_unload(on_create);

				}
			};
			wnd.elmnts = {grids: {}};

		}else{
			// форма в модальном диалоге
			options = {
				name: 'wnd_rep_' + _mgr.class_name,
				wnd: {
					top: 80 + Math.random()*40,
					left: 120 + Math.random()*80,
					width: 700,
					height: 400,
					modal: true,
					center: false,
					pwnd: pwnd,
					allow_close: true,
					allow_minmax: true,
					on_close: frm_close,
					caption: (_meta.obj_presentation || _meta.synonym)
				}
			};
			wnd = $p.iface.dat_blank(null, options.wnd);
		}

		// указатели на объект и менеджер
		wnd._mgr = _mgr;
		wnd.report = _mgr.create();


		if(!wnd.set_text)
			wnd.__define({

				/**
				 * Обновляет текст заголовка формы
				 */
				set_text: {
					value: function(force) {
						if(attr && attr.set_text || wnd && wnd.setText){

							var title = (_meta.obj_presentation || _meta.synonym);

							if(force || _title !== title){
								_title = title;
								if(attr.set_text)
									attr.set_text(title);
								else
									wnd.setText(title);
							}
						}
					},
					configurable: true
				}
			});

		/**
		 *	Разбивка на отчет и параметры
		 */
		wnd.elmnts.layout = wnd.attachLayout({
			pattern: "2U",
			cells: [{
				id: "a",
				text: "Отчет",
				header: false
			}, {
				id: "b",
				text: "Параметры",
				collapsed_text: "Параметры",
				width: 220

			}],
			offsets: { top: 0, right: 0, bottom: 0, left: 0}
		});

		// панель инструментов формы
		wnd.elmnts.frm_toolbar = wnd.attachToolbar();
		wnd.elmnts.frm_toolbar.setIconsPath(dhtmlx.image_path + 'dhxtoolbar' + dhtmlx.skin_suffix());
		wnd.elmnts.frm_toolbar.loadStruct(attr.toolbar_struct || $p.injected_data["toolbar_rep.xml"], function(){

			// если мы приклеены к ячейке, сдвигаем toolbar на 4px
			if(wnd === pwnd)
				this.cont.style.top = "4px";

			this.addSpacer("btn_run");
			this.attachEvent("onclick", attr.toolbar_click || toolbar_click);

		});

		// устанавливаем текст заголовка формы
		wnd.set_text();
		if(!attr.hide_header && wnd.showHeader)
			wnd.showHeader();

		// создаём HandsontableDocument
		wnd.elmnts.table = new $p.HandsontableDocument(wnd.elmnts.layout.cells("a"),
			{allow_offline: wnd.report.allow_offline, autorun: false})
			.then(function (rep) {
				if(!rep._online)
					return wnd.elmnts.table = null;
			});

	}

	/**
	 * обработчик нажатия кнопок командных панелей
	 */
	function toolbar_click(btn_id){

		if(btn_id=="btn_close")
			wnd.close();

		else if(btn_id=="btn_run")
			wnd.report.build().then(show).catch(show);

		else if(btn_id=="btn_print")
			_mgr.import(null, wnd.report);

		else if(btn_id=="btn_save")
			_mgr.import(null, wnd.report);

		else if(btn_id=="btn_load")
			_mgr.import(null, wnd.report);

		else if(btn_id=="btn_export")
			_mgr.export({items: [wnd.report], pwnd: wnd, obj: true} );

	}

	/**
	 * показывает отчет
	 */
	function show(data) {
		if(data instanceof Error){

		}else{
			wnd.elmnts.table.requery(data);
		}
	}

	/**
	 * освобождает переменные после закрытия формы
	 */
	function frm_unload(on_create){

		if(attr && attr.on_close && !on_create)
			attr.on_close();

		if(!on_create){
			delete wnd.set_text;

			if(wnd.elmnts.table)
				wnd.elmnts.table.hot.destroy();

			wnd.report = null;

			_mgr = wnd = _meta = options = pwnd = attr = null;
		}
	}

	frm_create();

	return wnd;

}


function ODateRangePicker(container, attr) {

}

$p.rep.cash_moving.form_rep = function (pwnd, attr) {

	var wnd = form_rep.call(this, pwnd, attr),
		cont = document.createElement("DIV");

	//cont.style.width = "100%";
	cont.style.height = "100%";
	cont.style.minHeight = "300px";

	wnd.elmnts.layout.cells("b").attachObject(cont);


	// закладка с параметрами
	wnd.elmnts.frm_prm = new dhtmlXLayoutObject({
		parent: cont,
		pattern: "2E",
		cells: [{
			id: "a",
			text: "Период",
			header: false,
			height: 40
		}, {
			id: "b",
			text: "Кассы",
			header: false

		}],
		offsets: { top: 8, right: 0, bottom: 0, left: 0}
	});

	wnd.elmnts.frm_prm.cells("a").fixSize(false, true);
	wnd.elmnts.frm_prm.cells("a").setMinHeight(24);
	wnd.elmnts.frm_prm.cells("a").setHeight(26);

	wnd.elmnts.layout.cells("b").showHeader();
	wnd.elmnts.layout.attachEvent("onResizeFinish", function(){
		wnd.elmnts.frm_prm.setSizes();
	});
	wnd.elmnts.layout.attachEvent("onPanelResizeFinish", function(){
		wnd.elmnts.frm_prm.setSizes();
	});

	// список касс
	var grid_cashboxes = wnd.elmnts.frm_prm.cells("b").attachGrid(),
		data={
			rows:[]
		};
	grid_cashboxes.setHeader(" ,Касса");
	grid_cashboxes.setInitWidths("50,*");
	grid_cashboxes.setColumnMinWidth("40,200");
	grid_cashboxes.setColSorting("na,na");
	grid_cashboxes.setColTypes("ch,ro");
	grid_cashboxes.enableAutoWidth(true, 600, 180);
	grid_cashboxes.init();
	$p.wsql.alasql("select ref, name from cat_cashboxes where not(ref = '00000000-0000-0000-0000-000000000000') order by name").forEach(function (row, ind, arr) {
		data.rows.push({ id:row.ref, data: [(ind+1) < arr.length ? 1 : 0, row.name]});
	});
	grid_cashboxes.parse(data,"json");

	wnd.report.cashboxes = function () {
		var res = [];
		grid_cashboxes.forEachRow(function(id){
			if(grid_cashboxes.cells(id,0).isChecked())
				res.push(id);
		});
		return res;
	}

};

// методы объекта отчет
$p.RepCash_moving.prototype.__define({

	/**
	 * ### Формирует отчет
	 * @param obj
	 * @return Promise.<T>
	 */
	build: {
		value: function() {

			var date_from = new Date((new Date()).getFullYear().toFixed() + "-01-01"),
				date_till = new Date((new Date()).getFullYear().toFixed() + "-12-31"),
				query_options = {
					reduce: true,
					limit: 10000,
					group: true,
					group_level: 4,
					startkey: [],
					endkey: [date_from.getFullYear(), date_from.getMonth()+1, date_from.getDate(),"\uffff"]
				},
				res = {
					data: [],
					readOnly: true,
					wordWrap: false,
					colWidths: [220, 120, 120, 120, 120],
					colHeaders: ['Касса', 'Нач. ост.', 'Приход', 'Расход', 'Кон. ост'],
					columns: [
						{type: 'text'},
						{type: 'numeric', format: '0 0.00'},
						{type: 'numeric', format: '0 0.00'},
						{type: 'numeric', format: '0 0.00'},
						{type: 'numeric', format: '0 0.00'}
					]
				},
				start_total = {},
				cashboxes = this.cashboxes();

			return $p.wsql.pouch.local.doc.query("doc/cash_moving_date_cashbox", query_options)

				.then(function (data) {

					if(data.rows){
						data.rows.forEach(function (row) {

							if(cashboxes.indexOf(row.key[3]) == -1)
								return;

							if(!start_total.hasOwnProperty(row.key[3]))
								start_total[row.key[3]] = [0,0,0,0];

							start_total[row.key[3]][0] += row.value.total;
							start_total[row.key[3]][3] = start_total[row.key[3]][0];

						});
					}

					query_options.startkey = [date_from.getFullYear(), date_from.getMonth()+1, date_from.getDate(), ""];
					query_options.endkey = [date_till.getFullYear(), date_till.getMonth()+1, date_till.getDate(),"\uffff"]

					return $p.wsql.pouch.local.doc.query("doc/cash_moving_date_cashbox", query_options)
				})
				.then(function (data) {

					if(data.rows){

						data.rows.forEach(function (row) {

							if(cashboxes.indexOf(row.key[3]) == -1)
								return;

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

	allow_offline: {
		value: true
	}

});


