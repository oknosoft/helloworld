import React from 'react';
import {Routes, Route} from 'react-router-dom';
//import DataList from '../packages/ui/DataList';

export default function DataRoute() {
  return <Routes>
    <Route path="characteristics">
      <Route index element={'DataList'} />
      <Route path=":ref" element={'CharacteristicObj'} />
    </Route>
    <Route path="*" element={'DataList'} />
  </Routes>;
}
