/**
 * ### Раздел интерфейса _Настройки_
 * Закладки основных и дополнительных настроек
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 */

$p.iface.view_settings = function (cell) {

	function OViewSettings(){

		// дополнительная навигация
		this.tb_nav = $p.iface.btns_nav(cell.cell.querySelector(".dhx_cell_sidebar_hdr"));

		// разделы настроек - таббар с закладками "общее" и "все объекты"
		this.tabs = cell.attachTabbar({
			arrows_mode:    "auto",
			tabs: [
				{id: "settings", text: '<i class="fa fa-key"></i> Общее', active: true},
				{id: "meta_objs", text: '<i class="fa fa-sitemap"></i> Все объекты'}
			]
		});

		// обработчик при смене закладки таббара
		this.tabs.attachEvent("onSelect", function(id){
			if(this[id] && this[id].tree && this[id].tree.getSelectedId()){
				this[id].tree.callEvent("onSelect", [this[id].tree.getSelectedId(), true]);
			}
			return true;
		}.bind(this));

		// закладка общих настроек - используем стандартную страницу, при необходимости можем переопределить
		this.settings = new $p.iface.Setting2col(this.tabs.cells("settings"));

		// закладка справочников и регистров - используем стандартную страницу, при необходимости можем переопределить
		this.meta_objs = new $p.iface.All_meta_objs(this.tabs.cells("meta_objs"), ["cat","doc","cch","ireg"]);

	}

	return $p.iface._settings || ($p.iface._settings = new OViewSettings());

};
