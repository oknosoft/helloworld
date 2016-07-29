/**
 * ### Раздел интерфейса _Заказы_
 * Содержит карусель с двумя страницами: list и doc
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 */

$p.iface.view_orders = function (cell) {

	function OViewOrders(){

		var t = this;

		// показывает форму списка
		function show_list(){
			
			t.carousel.cells("list").setActive();
			cell.setText({text: "Заказы"});

			if(!t.list){
				t.carousel.cells("list").detachObject(true);
				t.list = $p.doc.buyers_order.form_list(t.carousel.cells("list"));
			}

		}

		// показывает форму заказа
		function show_doc(ref){

			var _cell = t.carousel.cells("doc");

			_cell.setActive();

			if(!_cell.ref || _cell.ref != ref)

				$p.doc.buyers_order.form_obj(_cell, {
						ref: ref,
						bind_pwnd: true,
						on_close: function () {
							setTimeout(function () {
								$p.iface.set_hash(undefined, "", "list");
							});
						},
						set_text: function (text) {
							if(t.carousel.getActiveCell() == _cell)
								cell.setText({text: "<b>" + text + "</b>"});
						}
					})
					.then(function (wnd) {
						t.doc = wnd;
						setTimeout(t.doc.wnd.set_text.bind(t.doc.wnd, true), 200);
					});

			else if(t.doc && t.doc.wnd){
				setTimeout(t.doc.wnd.set_text.bind(t.doc.wnd, true), 200);
			}

		}

		// обработчик маршрутизации url
		function hash_route(hprm) {

			if(hprm.view == "orders"){

				if(hprm.obj == "doc.buyers_order" && !$p.utils.is_empty_guid(hprm.ref)){

					if(hprm.frm != "doc")
						setTimeout(function () {
							$p.iface.set_hash(undefined, undefined, "doc");
						});
					else
						show_doc(hprm.ref);


				} else{

					if(hprm.obj != "doc.buyers_order")
						setTimeout(function () {
							$p.iface.set_hash("doc.buyers_order", "", "list");
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
				$p.iface.set_hash($p.job_prm.parse_url().obj || "doc.buyers_order");
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

	return $p.iface._orders || ($p.iface._orders = new OViewOrders());

};
