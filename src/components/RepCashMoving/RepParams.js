/**
 * ### Панель параметрв
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2017
 *
 * @module RepParams
 *
 * Created 09.01.2017
 */

import React, {Component, PropTypes} from "react";
import MetaComponent from "metadata-ui/common/MetaComponent";
import DataListField from "metadata-ui/DataListField";
import DataField from "metadata-ui/DataField";

export default class RepParams extends MetaComponent {

  static propTypes = {
    _obj: PropTypes.object.isRequired,  // DataObj (отчет)
    minHeight: PropTypes.number,
    handleCustom: PropTypes.func,       // Внешний дополнительный подключаемый обработчик
  }

  handleValueChange = () => {
    const {_obj, scheme} = this.props;
    scheme.date_from = _obj.period_from;
    scheme.date_till = _obj.period_till;
  }

  render() {

    const {_obj, minHeight} = this.props

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
    )

  }
}