/**
 * ### Панель параметрв
 * для отчета _Движение денег_
 *
 * Created 09.01.2017
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DataListField from 'metadata-react/DataListField';
import DataField from 'metadata-react/DataField';

export default class RepParams extends Component {

  static propTypes = {
    _obj: PropTypes.object.isRequired,  // DataObj (отчет)
    minHeight: PropTypes.number,
  };

  handleValueChange = () => {
    const {_obj, scheme} = this.props;
    scheme.date_from = _obj.period_from;
    scheme.date_till = _obj.period_till;
  };

  render() {

    const {_obj, minHeight} = this.props;

    return (
      <div style={{height: '356px', marginTop: '16px'}}>

        <DataField
          _obj={_obj}
          _fld="period_from"
          handleValueChange={this.handleValueChange}
        />

        <DataField
          _obj={_obj}
          _fld="period_till"
          handleValueChange={this.handleValueChange}
        />

        <DataListField
          _tabular={_obj.cashboxes}
          _fld="cashbox"
          _meta={_obj._metadata('cashboxes')}
        />

        <DataListField
          _tabular={_obj.cash_flow_articles}
          _fld="cash_flow_article"
          _meta={_obj._metadata('cash_flow_articles')}
        />

      </div>
    );

  }
}
