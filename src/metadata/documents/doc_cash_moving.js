/**
 * ### Модуль менеджера и документа Перемещение денег
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2017
 *
 * @module doc_cash_moving
 * Created 28.07.2016
 */

import {handleIfaceState} from '../../';

export default function ($p) {

  const {DocCash_moving: {prototype}, doc: {cash_moving}, msg} = $p;

  // корректируем метаданные - описываем структуру формы документа
  const meta = cash_moving.metadata();

  // свойство form могли определить в другом месте, на всякий случае - не гадим
  if(!meta.form) {
    meta.form = {};
  }

  // собственно, структура формы
  meta.form.obj = {
    items: [
      {
        element: 'FormGroup',
        row: true,
        items: [
          {
            element: 'DataField',
            fld: 'number_doc',
          },
          {
            element: 'DataField',
            fld: 'date',
          },
        ]
      },
      {
        element: 'FormGroup',
        row: true,
        items: [
          {
            element: 'DataField',
            fld: 'sender',
          },
          {
            element: 'DataField',
            fld: 'recipient',
          },
        ]
      },
      {
        element: 'FormGroup',
        items: [
          {
            element: 'DataField',
            fld: 'doc_amount',
          },
          {
            element: 'DataField',
            fld: 'cash_flow_article',
            fullWidth: true,
          },
          {
            element: 'DataField',
            fld: 'responsible',
            fullWidth: true,
          },
          {
            element: 'DataField',
            fld: 'note',
            fullWidth: true,
          },
        ]
      },
    ]
  };

  /**
   * Обработчик перед записью документа
   */
  prototype.before_save = function () {

    // как минимум, одна касса должна быть заполнена
    if(this.sender.empty() && this.recipient.empty()) {

      // показываем диалог
      handleIfaceState({
        component: '',
        name: 'alert',
        value: {open: true, title: msg.mandatory_title, text: msg.mandatory_one_cashbox}
      });

      return false;
    }

  };

}
