import React from 'react';
import MuiAutocomplete from '@mui/material/Autocomplete';
import StyledInput from './StyledInput';

const getOptionLabel = (v) => v?.name || v?.toString() || '';

/**
 * @summary Висящее в воздухе поле ввода
 * @desc Это не совсем DataField.
 * Он не редактирует DataObj, но позволяет показать и выбрать из списка, значение DataObj
 */
export default function Autocomplete({label, fullWidth, disableClearable, ...other}) {

  if(typeof disableClearable !== 'boolean') {
    disableClearable = true;
  }

  return <MuiAutocomplete
    disableListWrap
    disableClearable={disableClearable}
    getOptionLabel={getOptionLabel}
    renderInput={(params) => <StyledInput {...params} fullWidth={fullWidth} label={label}/>}
    //renderOption={(props, option, state) => <Typography key={option.ref} noWrap>{option.name}</Typography>}
    {...other}
  />;
}
