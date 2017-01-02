/**
 * ### Табы сохраненных настроек
 * По умолчанию, приклеены к диалогу, но их можно расположить где угодно
 *
 * @module SchemeSettings
 *
 * Created 19.12.2016
 */

import React, {Component, PropTypes} from "react";
import {Tabs, Tab} from "material-ui/Tabs";
import Subheader from "material-ui/Subheader";
import TabularSection from "../TabularSection";


export default class SchemeSettingsTabs extends Component {

  static propTypes = {
    handleSchemeChange: PropTypes.func.isRequired,
    scheme: PropTypes.object.isRequired,
    schemas: PropTypes.object.isRequired
  }

  state = {
    tab_value: 'p'
  }

  handleTabChange = (tab_value) => {
    this.setState({tab_value})
  }

  render() {

    const {handleSchemeChange, scheme, schemas} = this.props

    return (

      <Tabs
        value={this.state.tab_value}
        onChange={this.handleTabChange}
      >

        <Tab label="Параметры" value="p">

          <Subheader>Параметры запроса</Subheader>

          <TabularSection
            _obj={scheme}
            _tabular="params"
            minHeight={150}
          />

          <Subheader>Отбор</Subheader>
          <TabularSection
            _obj={scheme}
            _tabular="selection"
            minHeight={150}
          />

        </Tab>

        <Tab label="Колонки" value="c">

          <TabularSection
            _obj={scheme}
            _tabular="fields"
            _columns={[
              {
                key: 'field',
                name: 'Поле',
                resizable : true
              }]}
            deny_add_del={true}
            minHeight={300}
          />

        </Tab>

        <Tab label="Группировка" value="g">

          <TabularSection
            _obj={scheme}
            _tabular="dimensions"
            minHeight={150}
          />

          <TabularSection
            _obj={scheme}
            _tabular="resources"
            minHeight={150}
          />

        </Tab>

        <Tab label="Сортировка" value="s">

          <TabularSection
            _obj={scheme}
            _tabular="sorting"
            minHeight={300}
          />

        </Tab>

        <Tab label="Вариант" value="v">

          <div>Вариант</div>

        </Tab>

      </Tabs>
    )
  }

}
