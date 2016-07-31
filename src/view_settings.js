/**
 * ### Раздел интерфейса _Настройки_
 * Закладки основных и дополнительных настроек
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 */

$p.iface.view_settings = function (cell) {

	function OViewSettings(){

		var t = this;
		
		t.tb_nav = $p.iface.btns_nav(cell.cell.querySelector(".dhx_cell_sidebar_hdr"));

		// разделы настроек
		t.tabs = cell.attachTabbar({
			arrows_mode:    "auto",
			tabs: [
				{id: "const", text: '<i class="fa fa-key"></i> Общее', active: true},
				{id: "data", text: '<i class="fa fa-sitemap"></i> Все объекты'}
			]
		});

		// обработчик при смене закладки
		t.tabs.attachEvent("onSelect", function(id){
			if(t[id] && t[id].tree && t[id].tree.getSelectedId()){
				t[id].tree.callEvent("onSelect", [t[id].tree.getSelectedId()]);
			}
			return true;
		});

		// закладка основных настроек
		t.tabs.cells("const").attachHTMLString($p.injected_data['view_settings.html']);
		t.const = t.tabs.cells("const").cell.querySelector(".dhx_cell_cont_tabbar");
		t.const.style.overflow = "auto";

		// первая колонка настроек
		(function (cont) {


			t.form1 = new dhtmlXForm(cont, [

					{ type:"settings", labelWidth:80, position:"label-left"  },

					{type: "label", labelWidth:320, label: "Адрес CouchDB", className: "label_options"},
					{type:"input" , inputWidth: 220, name:"couch_path", label:"Путь:", validate:"NotEmpty"},
					{type:"template", label:"",value:"",
						note: {text: "Можно указать как относительный, так и абсолютный URL публикации CouchDB", width: 320}},

					{type: "label", labelWidth:320, label: "Значение разделителя данных", className: "label_options"},
					{type:"input" , inputWidth: 220, name:"zone", label:"Зона:", numberFormat: ["0", "", ""], validate:"NotEmpty,ValidInteger"},
					{type:"template", label:"",value:"", note: {text: "Для неразделенной публикации, зона = 0", width: 320}},

					{type: "label", labelWidth:320, label: "Суффикс базы пользователя", className: "label_options"},
					{type:"input" , inputWidth: 220, name:"couch_suffix", label:"Суффикс:"},
					{type:"template", label:"",value:"",
						note: {text: "Назначается дилеру при регистрации", width: 320}},

					{type: "label", labelWidth:320, label: "Сохранять пароль пользователя", className: "label_options"},
					{type:"checkbox", name:"enable_save_pwd", label:"Разрешить:", checked: $p.wsql.get_user_param("enable_save_pwd", "boolean")},
					{type:"template", label:"",value:"", note: {text: "Не рекомендуется, если к компьютеру имеют доступ посторонние лица", width: 320}},
					{type:"template", label:"",value:"", note: {text: "", width: 320}},

					{ type:"block", blockOffset: 0, name:"block_buttons", list:[
						{type: "button", name: "save", value: "<i class='fa fa-floppy-o fa-lg'></i>", tooltip: "Применить настройки и перезагрузить программу"},
						{type:"newcolumn"},
						{type: "button", offsetLeft: 20, name: "reset", value: "<i class='fa fa-refresh fa-lg'></i>", tooltip: "Стереть справочники и перезаполнить данными сервера"}
					]  }

				]
			);
			t.form1.cont.style.fontSize = "100%";

			// инициализация свойств
			["zone", "couch_path", "couch_suffix"].forEach(function (prm) {
				if(prm == "zone")
					t.form1.setItemValue(prm, $p.wsql.get_user_param(prm));
				else
					t.form1.setItemValue(prm, $p.wsql.get_user_param(prm) || $p.job_prm[prm]);
			});

			t.form1.attachEvent("onChange", function (name, value, state){
				$p.wsql.set_user_param(name, name == "enable_save_pwd" ? state || "" : value);
			});

			t.form1.attachEvent("onButtonClick", function(name){

				if(name == "save"){

					// завершаем синхронизацию
					$p.wsql.pouch.log_out();

					// перезагружаем страницу
					setTimeout(function () {
						$p.eve.redirect = true;
						location.reload(true);
					}, 1000);

				} else if(name == "reset"){

					dhtmlx.confirm({
						title: "Сброс данных",
						text: "Стереть справочники и перезаполнить данными сервера?",
						cancel: $p.msg.cancel,
						callback: function(btn) {
							if(btn)
								$p.wsql.pouch.reset_local_data();
						}
					});
				}
			});

		})(t.const.querySelector("[name=form1]").firstChild);

		// вторая колонка настроек
		(function (cont) {
			t.form2 = new dhtmlXForm(cont, [
				{ type:"settings", labelWidth:320, position:"label-left"  },

				{type: "label", label: "Тип устройства", className: "label_options"},
				{ type:"block", blockOffset: 0, name:"block_device_type", list:[
					{ type:"settings", labelAlign:"left", position:"label-right"  },
					{ type:"radio" , name:"device_type", labelWidth:120, label:'<i class="fa fa-desktop"></i> Компьютер', value:"desktop"},
					{ type:"newcolumn"   },
					{ type:"radio" , name:"device_type", labelWidth:150, label:'<i class="fa fa-mobile fa-lg"></i> Телефон, планшет', value:"phone"}
				]  },
				{type:"template", label:"",value:"", note: {text: "Класс устройства определяется автоматически, но пользователь может задать его явно", width: 320}},

				//{type: "label", labelWidth:320, label: "Адрес http сервиса 1С", className: "label_options"},
				//{type:"input" , inputWidth: 220, name:"rest_path", label:"Путь", validate:"NotEmpty"},
				//{type:"template", label:"",value:"",
				//	note: {text: "Можно указать как относительный, так и абсолютный URL публикации 1С OData. " +
				//	"О настройке кроссдоменных запросов к 1С <a href='#'>см. здесь</a>", width: 320}},

				{type: "label", label: "Подключаемые модули", className: "label_options"},
				{type:"input" , position:"label-top", inputWidth: 320, name:"modifiers", label:"Модификаторы:", value: $p.wsql.get_user_param("modifiers"), rows: 3, style:"height:80px;"},
				{type:"template", label:"",value:"", note: {text: "Список дополнительных модулей", width: 320}}

			]);

			t.form2.cont.style.fontSize = "100%";

			// инициализация свойств
			t.form2.checkItem("device_type", $p.job_prm.device_type);

			t.form2.disableItem("modifiers");

			// подключаем обработчик изменения значений в форме
			t.form2.attachEvent("onChange", function (name, value, state){
				$p.wsql.set_user_param(name, value);

			});

			t.form2.getInput("modifiers").onchange = function () {
				$p.wsql.set_user_param("modifiers", this.value);
			};

		})(t.const.querySelector("[name=form2]").firstChild);


		// закладка справочников и регистров
		t.data = {
			layout: t.tabs.cells("data").attachLayout({
				pattern: "2U",
				cells: [{
					id: "a",
					text: "Разделы",
					collapsed_text: "Разделы",
					width: 200
				}, {
					id: "b",
					text: "Раздел",
					header: false
				}],
				offsets: { top: 0, right: 0, bottom: 0, left: 0}
			})
		};
		// дерево технологических справочников
		t.data.tree = t.data.layout.cells("a").attachTreeView();
		//t.data.tree.enableTreeImages(false);
		t.data.tree.attachEvent("onSelect", function (name) {
			$p.md.mgr_by_class_name(name).form_list(t.industry.layout.cells("b"), {hide_header: true});
		});
		["cat","cch","cacc","ireg"].forEach(function (id) {
			t.data.tree.addItem(id, $p.msg["meta_"+id]);
			t.data.tree.setItemIcons(id, {file: "icon_1c_"+id, folder_opened: "icon_1c_"+id, folder_closed: "icon_1c_"+id});
		});

	}

	return $p.iface._settings || ($p.iface._settings = new OViewSettings());

};
