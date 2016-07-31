/**
 * ### Главное окно интерфейса
 * Сайдбар со страницами "Документы", "Отчеты", "Настройки", "О программе"
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 */

// Назначим обработчики событий
$p.on({

	/**
	 * ### При установке параметров сеанса
	 * Процедура устанавливает параметры работы программы, специфичные для текущей сборки
	 *
	 * @param prm {Object} - в свойствах этого объекта определяем параметры работы программы
	 */
	settings: function (prm) {

		prm.__define({

			// разделитель для localStorage
			local_storage_prefix: {
				value: "PACKAGE_PREFIX"
			},

			// скин по умолчанию
			skin: {
				value: "dhx_terrace"
			},

			// гостевые пользователи для демо-режима
			guests: {
				value: [{
					username: "Гость",
					password: "hQI7OhIGlVeOWi8="
				}]
			},

			// если понадобится обратиться к 1С, будем использовать irest
			irest_enabled: {
				value: true
			},

			// расположение rest-сервиса 1c по умолчанию
			rest_path: {
				value: "/a/zd/%1/odata/standard.odata/"
			},

			// не шевелить hash url при открытии подчиненных форм
			keep_hash: {
				value: true
			},

			// логин гостевого пользователя базы "meta" couchdb
			guest_name: {
				value: "guest"
			},

			// пароль гостевого пользователя базы "meta" couchdb
			guest_pwd: {
				value: "meta"
			}

		});

		// по умолчанию, обращаемся к зоне 0
		prm.zone = PACKAGE_ZONE;

		// объявляем номер демо-зоны
		prm.zone_demo = 0;

		// расположение couchdb
		prm.couch_path = "PACKAGE_COUCHDB";
		//prm.couchdb = "http://i980:5984/oo_";

		// разрешаем сохранение пароля
		prm.enable_save_pwd = true;

	},

	/**
	 * ### При инициализации интерфейса
	 * Вызывается после готовности DOM и установки параметров сеанса
	 *
	 */
	iface_init: function() {

		// разделы интерфейса
		$p.iface.sidebar_items = [
			{id: "doc", text: "Документы", icon: "projects_48.png"},
			{id: "rep", text: "Отчеты", icon: "graph_up_48.png"},
			{id: "settings", text: "Настройки", icon: "settings_48.png"},
			{id: "about", text: "О программе", icon: "about_48.png"}
		];

		// наблюдатель за событиями авторизации и синхронизации
		$p.iface.btn_auth_sync = new $p.iface.OBtnAuthSync();

		// кнопки навигации справа сверху
		$p.iface.btns_nav = function (wrapper) {
			return $p.iface.btn_auth_sync.bind(new $p.iface.OTooolBar({
				wrapper: wrapper,
				class_name: 'md_otbnav',
				width: '260px', height: '28px', top: '3px', right: '3px', name: 'right',
				buttons: [
					{name: 'about', text: '<i class="fa fa-info-circle md-fa-lg"></i>', tooltip: 'О программе', float: 'right'},
					{name: 'settings', text: '<i class="fa fa-cog md-fa-lg"></i>', tooltip: 'Настройки', float: 'right'},
					{name: 'rep', text: '<i class="fa fa-line-chart md-fa-lg"></i>', tooltip: 'Отчеты', float: 'right'},
					{name: 'doc', text: '<i class="fa fa-suitcase md-fa-lg"></i>', tooltip: 'Документы', float: 'right'},
					{name: 'sep_0', text: '', float: 'right'},
					{name: 'sync', text: '', float: 'right'},
					{name: 'auth', text: '', width: '80px', float: 'right'}

				], onclick: function (name) {
					$p.iface.main.cells(name).setActive(true);
					return false;
				}
			}))
		};

		// основной сайдбар
		$p.iface.main = new dhtmlXSideBar({
			parent: document.body,
			icons_path: "dist/imgs/",
			width: 180,
			header: true,
			template: "tiles",
			autohide: true,
			items: $p.iface.sidebar_items,
			offsets: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			}
		});

		// подписываемся на событие навигации по сайдбару
		$p.iface.main.attachEvent("onSelect", function(id){

			var hprm = $p.job_prm.parse_url();
			if(hprm.view != id)
				$p.iface.set_hash(hprm.obj, hprm.ref, hprm.frm, id);

			$p.iface["view_" + id]($p.iface.main.cells(id));

		});

		// включаем индикатор загрузки
		$p.iface.main.progressOn();

		// активируем страницу
		hprm = $p.job_prm.parse_url();
		if(!hprm.view || $p.iface.main.getAllItems().indexOf(hprm.view) == -1){
			$p.iface.set_hash(hprm.obj, hprm.ref, hprm.frm, "doc");
		} else
			setTimeout($p.iface.hash_route);

	},

	/**
	 * ### Обработчик маршрутизации
	 */
	hash_route: function (hprm) {

		// view отвечает за переключение закладки в SideBar
		if(hprm.view && $p.iface.main.getActiveItem() != hprm.view){
			$p.iface.main.getAllItems().forEach(function(item){
				if(item == hprm.view)
					$p.iface.main.cells(item).setActive(true);
			});
		}

		return false;
	},

	/**
	 * ### При окончании загрузки локальных данных
	 */
	predefined_elmnts_inited: function predefined_elmnts_inited() {

		$p.iface.main.progressOff();
		$p.off(predefined_elmnts_inited);

		// если разрешено сохранение пароля - сразу пытаемся залогиниться
		if(!$p.wsql.pouch.authorized && navigator.onLine &&
			$p.wsql.get_user_param("enable_save_pwd") &&
			$p.wsql.get_user_param("user_name") &&
			$p.wsql.get_user_param("user_pwd")){

			setTimeout(function () {
				$p.iface.frm_auth({
					modal_dialog: true,
					try_auto: true
				});
			}, 100);
		}

	},

	/**
	 * ### Обработчик ошибки загрузки локальных данных
	 * @param err
	 */
	pouch_load_data_error: function pouch_load_data_error(err) {

		// если это первый запуск, показываем диалог авторизации
		if(err.db_name && err.hasOwnProperty("doc_count") && err.doc_count < 10 && navigator.onLine){

			$p.wsql.set_user_param("enable_save_pwd", true);

			// если это демо (zone === zone_demo), устанавливаем логин и пароль
			if($p.wsql.get_user_param("zone") == $p.job_prm.zone_demo && !$p.wsql.get_user_param("user_name")){
				$p.wsql.set_user_param("user_name", $p.job_prm.guests[0].username);
			}

			$p.iface.frm_auth({
				modal_dialog: true,
				try_auto: $p.wsql.get_user_param("zone") == $p.job_prm.zone_demo && $p.wsql.get_user_param("enable_save_pwd")
			});

		}

		$p.iface.main.progressOff();
		$p.off(pouch_load_data_error);

	}
});
