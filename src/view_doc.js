/**
 * ### Раздел интерфейса _Документы_
 * Содержит карусель с двумя страницами: list и doc
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 */

$p.iface.view_doc = function (cell) {

	function OViewDocs(){

		var t = this,
			list_attr = {
				hide_header: true,
				date_from: new Date((new Date()).getFullYear().toFixed() + "-01-01"),
				date_till: new Date((new Date()).getFullYear().toFixed() + "-12-31"),
				on_new: function (o) {
					$p.iface.set_hash(this.class_name, o.ref, "doc");
				},
				on_edit: function (_mgr, rId) {
					$p.iface.set_hash(_mgr.class_name, rId, "doc");
				}
			};

		// показывает форму списка
		function show_list(obj){
			
			t.carousel.cells("list").setActive();
			cell.setText({text: "Документы"});

			// если указан несуществующий документ
			if(!$p.doc[obj]){
				return;
			}

			// если форму еще не рисовали
			if(!t.list)
				t.list = $p.doc[obj].form_list(t.list_cell, list_attr);

			else if(t.list._mgr != $p.doc[obj]){
				t.list.close();
				t.list_cell.detachObject(true);
				t.list = $p.doc[obj].form_list(t.list_cell, list_attr);
			}

		}

		// показывает форму заказа
		function show_doc(obj, ref){

			var _cell = t.carousel.cells("doc");

			_cell.setActive();

			if(!_cell.ref || _cell.ref != ref){

				$p.doc[obj].form_obj(_cell, {
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

			} else if(t.doc && t.doc.wnd){
				setTimeout(t.doc.wnd.set_text.bind(t.doc.wnd, true), 200);
			}

		}

		// обработчик маршрутизации url
		function hash_route(hprm) {

			if(hprm.view == "doc"){

				var obj = hprm.obj ? hprm.obj.split(".")[1] : t.default_obj;

				if($p.md.get_classes().doc.indexOf(obj) == -1){
					$p.iface.set_hash("doc." + t.default_obj);
					return;
				}

				if(!$p.utils.is_empty_guid(hprm.ref)){

					if(hprm.frm != "doc")
						setTimeout(function () {
							$p.iface.set_hash(undefined, undefined, "doc");
						});
					else
						show_doc(obj, hprm.ref);


				} else{

					show_list(obj);
				}

				return false;
			}

			return true;

		}

		// cюда попадаем после всех приготовлений - можно рисовать форму списка документов
		function go_go(){

			$p.off(go_go);

			setTimeout(function () {
				hash_route($p.job_prm.parse_url());
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

		// Если документов к показу больше 1, layout с деревом и списком иначе - просто список
		if($p.md.get_classes().doc.reduce(function (sum, name) {
			if(!$p.md.get("doc."+name).hide){
				if(!t.default_obj)
					t.default_obj = name;
				sum+=1;
			}
		}, 0) > 1){

			t.list_layout = t.carousel.cells("list").attachLayout({
					pattern: "2U",
					cells: [{
						id: "a",
						text: "Документы",
						collapsed_text: "Документы",
						width: 180
					}, {
						id: "b",
						text: "Документы",
						header: false
					}],
					offsets: { top: 0, right: 0, bottom: 0, left: 0}
				});

			t.objs_tree = t.list_layout.cells("a").attachTree();
			t.list_cell = t.list_layout.cells("b");

		}else{
			if(t.default_obj)
				t.list_cell = t.carousel.cells("list");
			else
				return;
		}


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

	return $p.iface._docs || ($p.iface._docs = new OViewDocs());

};
