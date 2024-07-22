import React from 'react';
import {Routes, Route} from 'react-router-dom';
import DataList from '@oknosoft/ui/dist/DataList';
import CashMovingList from './cash_moving/CashMovingList';
import CashMovingObj from './cash_moving/CashMovingObj';

export default function DataRoute() {
  return <Routes>
    <Route path="cash_moving">
      <Route index element={<DataList Component={CashMovingList}/>} />
      <Route path=":ref" element={<CashMovingObj/>} />
    </Route>
    <Route path="*" element="not found" />
  </Routes>;
}
