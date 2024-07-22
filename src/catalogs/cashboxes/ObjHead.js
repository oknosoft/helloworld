import React from 'react';
import Text from '@oknosoft/ui/dist/DataField/Text';
import RefField from '@oknosoft/ui/dist/DataField/RefField';

export default function CashboxesObjHead({obj}) {
  return <>
    <Text obj={obj} fld="id" />
    <Text obj={obj} fld="name" />
    <RefField obj={obj} fld="funds_currency" />
  </>;
}
