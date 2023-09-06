import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

export default function Text({obj, fld, meta, label, value, onChange, inputProps, fullWidth=true, ...other}) {
  if((typeof value !== 'string') && obj && fld) {
    value = obj[fld];
  }
  if(!meta && obj && fld) {
    meta = obj._metadata(fld);
  }
  if(!label && meta) {
    label = meta.synonym;
  }
  if(!other.tooltip && meta?.tooltip) {
    other.tooltip = meta.tooltip;
  }
  if(meta?.read_only) {
    other.readOnly = true;
  }
  const placeholder = meta?.placeholder;
  const [val, setVal] = React.useState(value);
  const setValue = ({target: {value}}) => {
    if(obj && fld) {
      obj[fld] = value;
      setVal(value);
    }
    onChange?.(value)
  };
  return <FormControl fullWidth={fullWidth} {...other}>
    <InputLabel>{label}</InputLabel>
    <Input
      inputProps={{placeholder, ...inputProps}}
      value={val}
      onChange={setValue}
    />
  </FormControl>;
}
