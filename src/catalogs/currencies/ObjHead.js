import React from 'react';
import Text from '@oknosoft/ui/dist/DataField/Text';

export default function CurrenciesObjHead({obj}) {
  return <>
    <Text obj={obj} fld="id" />
    <Text obj={obj} fld="name" />
    <Text obj={obj} fld="name_full" />
    <Text obj={obj} fld="parameters_russian_recipe" />
  </>;
}
