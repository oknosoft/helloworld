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
	 * В демо-приложении не используется, т.к. у него нет специфичных параметров
	 *
	 * @param prm {Object} - в свойствах этого объекта определяем параметры работы программы
	 *
	 * @example
	 *     prm.skin = "dhx_web";
	 *     prm.keep_hash = false;
	 */
	settings: function(prm) {

	},

	/**
	 * ### При инициализации интерфейса
	 * Вызывается после готовности DOM и установки параметров сеанса
	 *
	 */
	iface_init: function() {

		// используем стандартный сайдбар, в который передаём списки закладок и кнопок
		// первый параметр - список закладок
		// второй параметр - список кнопок дополнительной навигации
		$p.iface.init_sidebar(
			[
				{id: "doc", text: "Документы", icon: "projects_48.png"},
				{id: "rep", text: "Отчеты", icon: "graph_up_48.png"},
				{id: "settings", text: "Настройки", icon: "settings_48.png"},
				{id: "about", text: "О программе", icon: "about_48.png"}
			],
			[
				{name: 'about', text: '<i class="fa fa-info-circle md-fa-lg"></i>', tooltip: 'О программе', float: 'right'},
				{name: 'settings', text: '<i class="fa fa-cog md-fa-lg"></i>', tooltip: 'Настройки', float: 'right'},
				{name: 'rep', text: '<i class="fa fa-line-chart md-fa-lg"></i>', tooltip: 'Отчеты', float: 'right'},
				{name: 'doc', text: '<i class="fa fa-suitcase md-fa-lg"></i>', tooltip: 'Документы', float: 'right'},
				{name: 'sep_0', text: '', float: 'right'},
				{name: 'sync', text: '', float: 'right'},
				{name: 'auth', text: '', width: '80px', float: 'right'}

			]
		);

	}

});
