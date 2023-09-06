import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

export default function StyledInput ({inputProps, InputProps, InputLabelProps, id, label, fullWidth, ...other}) {
  return <FormControl fullWidth={fullWidth} {...other}>
    <InputLabel {...InputLabelProps} filled>{label}</InputLabel>
    <Input inputProps={inputProps} {...InputProps} />
  </FormControl>;
}
