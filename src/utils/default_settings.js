/**
 * Установка параметров по умолчанию из package.json
 */

// Назначим обработчики событий
$p.on({

	/**
	 * ### При установке параметров сеанса
	 * Процедура устанавливает параметры работы программы по умолчанию из package.json
	 *
	 * @param prm {Object} - в свойствах этого объекта определяем параметры работы программы
	 */
	settings: function default_settings(prm) {

		$p.off(default_settings);

		prm.__define({

			// разделитель для localStorage
			local_storage_prefix: {
				value: "PACKAGE_PREFIX",
				writable: true
			},

			// скин по умолчанию
			skin: {
				value: "dhx_terrace",
				writable: true
			},

			// гостевые пользователи для демо-режима
			guests: {
				value: [{
					username: "Гость",
					password: "hQI7OhIGlVeOWi8="
				}],
				writable: true
			},

			// если понадобится обратиться к 1С, будем использовать irest
			irest_enabled: {
				value: true,
				writable: true
			},

			// расположение rest-сервиса 1c по умолчанию
			rest_path: {
				value: "PACKAGE_REST_1C",
				writable: true
			},

			// расположение couchdb
			couch_path: {
				value: "PACKAGE_COUCHDB",
				writable: true
			},

			// не шевелить hash url при открытии подчиненных форм
			keep_hash: {
				value: true,
				writable: true
			},

			// по умолчанию, обращаемся к зоне 0
			zone: {
				value: PACKAGE_ZONE,
				writable: true
			},

			// объявляем номер демо-зоны
			zone_demo: {
				value: PACKAGE_ZONE_DEMO,
				writable: true
			},

			// объявляем номер демо-зоны
			attachment_max_size: {
				value: PACKAGE_ATT_MAX_SIZE,
				writable: true
			},

			// разрешаем сохранение пароля
			enable_save_pwd: {
				value: true,
				writable: true
			}

		});

	},

	/**
	 * ### Обработчик ошибки загрузки локальных данных
	 * @param err
	 */
	pouch_load_data_error: function pouch_load_data_error(err) {

		$p.off(pouch_load_data_error);

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

		if($p.iface.main && $p.iface.main.progressOff)
			$p.iface.main.progressOff();

	},

	/**
	 * ### При окончании загрузки локальных данных
	 */
	predefined_elmnts_inited: function predefined_elmnts_inited() {

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

		if($p.iface.main && $p.iface.main.progressOff)
			$p.iface.main.progressOff();

	},

	/**
	 * ### Обработчик маршрутизации
	 * view отвечает за переключение закладки в SideBar
	 */
	hash_route: function (hprm) {

		if(hprm.view && $p.iface.main && $p.iface.main.getActiveItem && $p.iface.main.getActiveItem() != hprm.view){
			$p.iface.main.getAllItems().forEach(function(item){
				if(item == hprm.view)
					$p.iface.main.cells(item).setActive(true);
			});
		}

		return false;
	}

});