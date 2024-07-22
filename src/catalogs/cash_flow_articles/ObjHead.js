import React from 'react';
import Text from '@oknosoft/ui/dist/DataField/Text';
import {NumberField} from '@oknosoft/ui/dist/DataField/Number';
import RefField from '@oknosoft/ui/dist/DataField/RefField';

export default function CashboxesObjHead({obj}) {
  return <>
    <Text obj={obj} fld="id" />
    <Text obj={obj} fld="name" />
    <RefField obj={obj} fld="parent" />
    <Text obj={obj} fld="definition" />
    <NumberField obj={obj} fld="sorting_field" />
  </>;
}
