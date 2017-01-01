/**
 * ### Табы сохраненных настроек
 * По умолчанию, приклеены к диалогу, но их можно расположить где угодно
 *
 * @module SchemeSettings
 *
 * Created 19.12.2016
 */

import React, { Component, PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import IconFilter from 'material-ui/svg-icons/content/filter-list';

import {Tabs, Tab} from 'material-ui/Tabs';



export default class SchemeSettingsTabs extends Component{

  static propTypes = {
    handleSchemeChange: PropTypes.func.isRequired,
    scheme: PropTypes.object.isRequired,
    schemas: PropTypes.object.isRequired
  }

  state = {
    tab_value: 'c'
  }

  handleTabChange = (tab_value) => {
    this.setState({ tab_value })
  }

	render(){

		return(

      <Tabs
        value={this.state.tab_value}
        onChange={this.handleTabChange}
      >

        {
          this.props.show_prm ?
            <Tab label="Параметры" value="p">

              <div>Параметры</div>

            </Tab>
            :
            null
        }

        <Tab label="Отбор" value="s">

          <div>Отбор</div>

        </Tab>

        <Tab label="Колонки" value="c">

          <div>Колонки</div>

        </Tab>

        <Tab label="Группировка" value="g">

          <div>Группировка</div>

        </Tab>

        <Tab label="Вариант" value="v">

          <div>Вариант</div>

        </Tab>

      </Tabs>
		)
	}

}
