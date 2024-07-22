import React from 'react';
import {Routes, Route} from 'react-router-dom';
import DataList from '@oknosoft/ui/dist/DataList';
import CatalogList from './CatalogList';
import CurrenciesObj from './currencies/CurrenciesObj';
import CashboxesObj from './cashboxes/CashboxesObj';
import CashFlowArticlesObj from './cash_flow_articles/CashFlowArticlesObj';

export default function DataRoute() {
  return <Routes>
    <Route path="currencies">
      <Route index element={<DataList Component={CatalogList}/>} />
      <Route path=":ref" element={<CurrenciesObj/>} />
    </Route>
    <Route path="cashboxes">
      <Route index element={<DataList Component={CatalogList}/>} />
      <Route path=":ref" element={<CashboxesObj/>} />
    </Route>
    <Route path="cash_flow_articles">
      <Route index element={<DataList Component={CatalogList}/>} />
      <Route path=":ref" element={<CashFlowArticlesObj/>} />
    </Route>
    <Route path="*" element={'DataList'} />
  </Routes>;
}
