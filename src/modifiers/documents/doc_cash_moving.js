/**
 * ### Модуль менеджера и документа Перемещение денег
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 *
 * @module doc_cash_moving
 * Created 28.07.2016
 */


// Подписываемся на события
$p.doc.cash_moving.on({

	/**
	 * Обработчик при создании документа
	 */
	after_create: function (attr) {

		//Номер документа
		return this.new_number_doc();

	}
});