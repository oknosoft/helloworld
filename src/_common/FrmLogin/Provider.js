import React from 'react';
import Autocomplete from '../../packages/ui/DataField/Autocomplete';

export default function Provider({value='couchdb', providerChange, options}) {
  value = options.find(({value: v}) => v === value) || null;
  return <Autocomplete
    options={options}
    onChange={providerChange}
    value={value}
    label="Провайдер"
    title="Провайдер авторизации"
    fullWidth
  />;
}
