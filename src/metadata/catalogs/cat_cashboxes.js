/**
 *
 *
 * @module cat_cashboxes
 *
 * Created by Evgeniy Malyarov on 10.04.2018.
 */

export default function ($p) {

  // корректируем метаданные - описываем структуру формы элемента справочника
  const meta = $p.cat.cashboxes.metadata();

  // свойство form могли определить в другом месте, на всякий случае - не гадим
  if(!meta.form) {
    meta.form = {};
  }

  // собственно, структура формы
  meta.form.obj = {
    items: [
      {
        element: 'FormGroup',
        items: [
          {
            element: 'DataField',
            fld: 'id',
            fullWidth: true,
          },
          {
            element: 'DataField',
            fld: 'name',
            fullWidth: true,
          },
          {
            element: 'DataField',
            fld: 'funds_currency',
            fullWidth: true,
          },
        ]
      },
    ]
  };
}
