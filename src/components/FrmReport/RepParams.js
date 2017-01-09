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
import DataListField from "../DataListField";

export default class RepParams extends Component {

  static propTypes = {
    _obj: PropTypes.object.isRequired,  // DataObj (отчет)
    minHeight: PropTypes.number,
    handleCustom: PropTypes.func,       // Внешний дополнительный подключаемый обработчик
  }

  static contextTypes = {
    $p: React.PropTypes.object.isRequired
  }


  render() {

    const {_obj, minHeight} = this.props

    return (
      <div style={{height: minHeight}}>
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