/**
 * ### Раздел интерфейса _Отчеты_
 * Содержит список отчетов
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 */

$p.iface.view_rep = function (cell) {

	function OViewReports(){

		var t = this;

		// показывает форму списка
		function show_list(){
			
			t.carousel.cells("list").setActive();
			cell.setText({text: "Отчеты"});

			if(!t.list){
				t.carousel.cells("list").detachObject(true);
				t.list = $p.doc.cash_moving.form_list(t.carousel.cells("list"));
			}

		}


		// обработчик маршрутизации url
		function hash_route(hprm) {

			if(hprm.view == "rep"){

				if(hprm.obj == "doc.cash_moving" && !$p.utils.is_empty_guid(hprm.ref)){

					if(hprm.frm != "doc")
						setTimeout(function () {
							$p.iface.set_hash(undefined, undefined, "doc");
						});
					else
						show_doc(hprm.ref);


				} else{

					if(hprm.obj != "doc.cash_moving")
						setTimeout(function () {
							$p.iface.set_hash("doc.cash_moving", "", "list");
						});
					else
						show_list();
				}

				return false;
			}

			return true;

		}

		// cюда попадаем после всех приготовлений - можно рисовать форму заказов
		function go_go(){

			$p.off(go_go);

			setTimeout(function () {
				$p.iface.set_hash($p.job_prm.parse_url().obj || "doc.cash_moving");
			});
		}

		// Рисуем дополнительные элементы навигации
		t.tb_nav = $p.iface.btns_nav(cell.cell.querySelector(".dhx_cell_sidebar_hdr"));

		// Создаём страницы карусели
		t.carousel = cell.attachCarousel({
			keys:           false,
			touch_scroll:   false,
			offset_left:    0,
			offset_top:     0,
			offset_item:    0
		});
		t.carousel.hideControls();
		t.carousel.addCell("list");
		t.carousel.addCell("doc");


		// Дожидаемся инициализации констант
		if($p.job_prm.properties)
			setTimeout(go_go);
		else
			$p.on({ predefined_elmnts_inited: go_go });


		/**
		 * Обработчик маршрутизации
		 * @param hprm
		 * @return {boolean}
		 */
		$p.on("hash_route", hash_route);

	}

	return $p.iface._reports || ($p.iface._reports = new OViewReports());

};
