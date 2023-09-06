import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MUICheckbox from '@mui/material/Checkbox';

export default function Checkbox({obj, fld, meta, label, onChange, inputProps, fullWidth=true, ...other}) {
  if(!label && meta) {
    label = meta.synonym;
  }
  const [value, setValue] = React.useState(obj[fld]);
  const handleChange = ({target}) => {
    obj[fld] = target.checked;
    setValue(target.checked);
    onChange?.(target.checked);
  };

  //tooltip: fld_meta.tooltip
  return <FormControl fullWidth={fullWidth} {...other}>
    <InputLabel>{label}</InputLabel>
    <MUICheckbox
      disableRipple
      checked={value}
      onChange={handleChange}
    />
  </FormControl>;
}
