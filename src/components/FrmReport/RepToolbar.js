import React, {Component, PropTypes} from "react";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";

import RunIcon from "material-ui/svg-icons/av/play-arrow";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import PrintIcon from "material-ui/svg-icons/action/print";
import ShareIcon from "material-ui/svg-icons/social/share";
import SchemeSettings from "../SchemeSettings";


export default class RepToolbar extends Component {

  static propTypes = {

    handleSave: PropTypes.func.isRequired,        // обработчик формирования отчета
    handlePrint: PropTypes.func.isRequired,       // обработчик открытия диалога печати
    handleClose: PropTypes.func.isRequired,       // команда Закрыть форму

    handleSchemeChange: PropTypes.func.isRequired,    // обработчик при изменении настроек компоновки
    scheme: PropTypes.object.isRequired,              // значение настроек компоновки

    _obj: PropTypes.object,

  }

  handleCustom = (row, _mgr) => {

  }

  render() {

    const {handleCustom, props} = this;
    const {handleSave, handleClose, handleSchemeChange, handlePrint, handleExport, scheme, _obj} = props;

    return (

      <Toolbar>
        <ToolbarGroup className={"meta-toolbar-group"} firstChild={true}>
          <IconButton touch={true} tooltip="Сформировать отчет" tooltipPosition="bottom-right" onTouchTap={handleSave}>
            <RunIcon />
          </IconButton>
        </ToolbarGroup>

        <ToolbarGroup className={"meta-toolbar-group"}>

          <SchemeSettings
            handleSchemeChange={handleSchemeChange}
            scheme={scheme}
          />

          <IconMenu
            iconButtonElement={
              <IconButton touch={true} tooltip="Дополнительно" tooltipPosition="bottom-left">
                <MoreVertIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Печать" leftIcon={<PrintIcon />} onTouchTap={handlePrint}/>
            <MenuItem primaryText="Экспорт" leftIcon={<ShareIcon />} onTouchTap={handleExport}/>

          </IconMenu>

        </ToolbarGroup>

      </Toolbar>
    )
  }
}

