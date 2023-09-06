import React from 'react';
import RefField from './RefField';
import Checkbox from './Checkbox';

export default function PropField({obj, meta, inset, label, onChange, fullWidth=true, ...other}) {
  const {param, cnstr} = obj;
  if(!inset) {
    inset = obj.inset;
  }

  // вычисляемые скрываем всегда
  let hide = !param.show_calculated && param.is_calculated;

  if(!meta) {
    const {utils} = $p;
    meta = utils._clone(obj._metadata('value'));
    meta.type = utils._clone(param.type);
    meta.synonym = label || param.caption || param.name;
  }
  const {types} = meta.type;

  if(!meta.type.is_ref) {
    if(meta.type.types.includes('boolean')) {
      return <Checkbox obj={obj} meta={meta} fld="value" fullWidth={fullWidth} {...other} />;
    }
    hide = true;
  }

  // учтём дискретный ряд - он приоритетнее связей параметров
  let oselect = types.length === 1 && ['cat.property_values', 'cat.characteristics'].includes(types[0]);
  const drow = inset?.product_params?.find({param});
  if(drow) {
    if(!hide){
      hide = drow.hide || obj.hide;
    }
    if(drow?.list) {
      try{
        meta.list = JSON.parse(drow.list);
        oselect = true;
      }
      catch (e) {
        delete meta.list;
      }
    }
    else {
      delete meta.list;
    }
  }
  else {
    // если нет умолчаний во вставке, используем связи
    const lnk_props = {obj, grid: {selection: {cnstr, inset}}};
    const links = param.params_links(lnk_props);
    // если для параметра есть связи - сокрытие по связям
    if(!hide){
      if(links.length) {
        hide = links.some((link) => link.hide);
      }
      else {
        hide = obj.hide;
      }
    }
    // дополним метаданные отбором
    if (links.length) {
      const values = [];
      param.linked_values(links, null, values);
      if(values.length) {
        if(values.length < 50) {
          oselect = true;
        }
        if(!meta.choice_params) {
          meta.choice_params = [];
        }
        // дополняем отбор
        meta.choice_params.push({
          name: 'ref',
          path: {in: values.map((v) => v.value)}
        });
      }
    }
  }

  return hide ? null : <RefField
    obj={obj}
    fld="value"
    meta={meta}
    onChange={onChange}
    fullWidth={fullWidth}
    {...other}
  />;
}
