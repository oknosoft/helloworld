import React, { Component, PropTypes } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import RemoveIcon from 'material-ui/svg-icons/action/delete';


import classes from './RepCashMoving.scss'

export default class TabularSectionToolbar extends Component{

  static propTypes = {

    handleAdd: PropTypes.func.isRequired,             // обработчик добавления объекта
    handleRemove: PropTypes.func.isRequired,          // обработчик удаления строки

  }

  render(){
    const props = this.props;
    return (

      <Toolbar className={classes.toolbar}>
        <ToolbarGroup firstChild={true}>
          <IconButton touch={true} tooltip="Добавить строку" tooltipPosition="bottom-right" onTouchTap={props.handleAdd}>
            <AddIcon />
          </IconButton>
          <IconButton touch={true} tooltip="Удалить строку" onTouchTap={props.handleRemove}>
            <RemoveIcon />
          </IconButton>
          <ToolbarSeparator />

        </ToolbarGroup>
      </Toolbar>
    )
  }
}
