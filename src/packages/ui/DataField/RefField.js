import React from 'react';
import Autocomplete from './Autocomplete';

export default function RefField({obj, fld, meta, label, onChange, fullWidth=true, ...other}) {

  let [value, setValue] = React.useState();
  if(value === undefined && obj && fld) {
    value = obj[fld];
  }
  if(!meta && obj && fld) {
    meta = obj._metadata(fld);
  }
  if(!label && meta) {
    label = meta.synonym;
  }

  const options = React.useMemo(() => {
    const mgr = obj._manager.value_mgr(obj, fld, meta.type);
    if(Array.isArray(meta.list)) {
      return meta.list.map((v) => mgr.get(v));
    }
    const res = [];
    const elmOnly = meta.choice_groups_elm === 'elm';
    for(const o of mgr) {
      if(elmOnly && o.is_folder) {
        continue;
      }
      res.push(o);
    }
    return res;
  }, [obj]);

  return <Autocomplete
    options={options}
    onChange={(event, newValue, reason, details) => {
      obj[fld] = newValue;
      onChange?.(newValue);
      setValue(obj[fld]);
    }}
    value={value}
    label={label}
    fullWidth={fullWidth}
    {...other}
  />;
}
