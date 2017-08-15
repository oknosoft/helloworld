import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router';

import DataListPage from 'metadata-react/DataList';
import DataObjPage from 'metadata-react/FrmObj';
//import MetaObjPage from '../../components/MetaObjPage';
import NotFoundPage from '../NotFoundPage';


const DataRoute = ({match}) => {

  const {area, name} = match.params;
  const _mgr = $p[area][name];
  const _acl = $p.current_user.get_acl(_mgr.class_name);

  return <Switch>
    <Route path={`${match.url}/:ref([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})`} render={(props) => <DataObjPage _mgr={_mgr} _acl={_acl} {...props}/>} />
    <Route path={`${match.url}/list`} render={(props) => <DataListPage _mgr={_mgr} _acl={_acl} {...props}/>} />
    {/**<Route path={`${match.url}/meta`} render={(props) => <MetaObjPage _mgr={_mgr} {...props}/>} />**/}
    <Route component={NotFoundPage}/>
  </Switch>;
};
DataRoute.propTypes = {
  match: PropTypes.object.isRequired,
};

export default DataRoute;
