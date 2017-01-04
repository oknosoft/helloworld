import React, {Component, PropTypes} from "react";
import {Toolbar, ToolbarGroup, ToolbarSeparator} from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import AddIcon from "material-ui/svg-icons/content/add-circle-outline";
import RemoveIcon from "material-ui/svg-icons/action/delete";
import ArrowUpIcon from "material-ui/svg-icons/navigation/arrow-drop-up";
import ArrowDownIcon from "material-ui/svg-icons/navigation/arrow-drop-down";


export default class TabularSectionToolbar extends Component {

  static propTypes = {

    handleAdd: PropTypes.func.isRequired,         // обработчик добавления объекта
    handleRemove: PropTypes.func.isRequired,      // обработчик удаления строки
    handleUp: PropTypes.func.isRequired,          // обработчик удаления строки
    handleDown: PropTypes.func.isRequired,        // обработчик удаления строки

  }

  render() {
    const props = this.props;
    return (

      <Toolbar>
        <ToolbarGroup firstChild={true}>

          <IconButton touch={true} tooltip="Добавить строку" tooltipPosition="bottom-right"
                      onTouchTap={props.handleAdd}>
            <AddIcon />
          </IconButton>
          <IconButton touch={true} tooltip="Удалить строку" onTouchTap={props.handleRemove}>
            <RemoveIcon />
          </IconButton>

          <ToolbarSeparator />

          <IconButton touch={true} tooltip="Переместить вверх" onTouchTap={props.handleUp}>
            <ArrowUpIcon />
          </IconButton>
          <IconButton touch={true} tooltip="Переместить вниз" onTouchTap={props.handleDown}>
            <ArrowDownIcon />
          </IconButton>

        </ToolbarGroup>
      </Toolbar>
    )
  }
}
