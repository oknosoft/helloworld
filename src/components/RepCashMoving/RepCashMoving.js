import React, {Component} from "react";

import FrmReport from "metadata-react/FrmReport";
import RepParams from "./RepParams";

// используем типовой отчет, в котором переопределяем закладку параметров и обработчик при изменении схемы компоновки
export default class Report extends Component {

  render() {
    const {props} = this;
    return <FrmReport
      {...props}
      TabParams={RepParams}
      handleSchemeChange={(component, scheme) => {
        const {_obj} = component.state;
        _obj.period_from = scheme.date_from;
        _obj.period_till = scheme.date_till;
      }}
    />
  }

}

