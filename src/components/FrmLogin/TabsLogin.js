import React, {Component, PropTypes} from "react";
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';


import classes from "./FrmLogin.scss";

export default class TabsLogin extends Component {

  static propTypes = {
    zone: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    couch_path: PropTypes.string.isRequired,
    enable_save_pwd: PropTypes.bool.isRequired,
    handleSetPrm: PropTypes.func.isRequired
  }

  constructor(props) {

    super(props);

    this.state = {
      zone: props.zone,
      couch_path: props.couch_path,
      enable_save_pwd: props.enable_save_pwd,
      tab_value: 'a',
      btn_login_disabled: !props.login || !props.password
    };
  }

  tabChange = (tab_value) => {
    if(tab_value === 'a' || tab_value === 'b'){
      this.setState({
        tab_value: tab_value,
      });
    }
  }

  handleSetPrm(){
    const { zone, couch_path, enable_save_pwd} = this.state
    this.props.handleSetPrm({ zone, couch_path, enable_save_pwd})
  }

  valueToState(name){
    return (event) => this.setState({ [name]: event.target.value })
  }

  handleTextChange = () => {
    this.setState({
      btn_login_disabled: !this.refs.login.input.value || !this.refs.password.input.value
    });
  }

  handleLogin = () => {
    this.props.handleLogin(this.refs.login.input.value, this.refs.password.input.value)
  }

  render() {
    return (

      <div className={classes.paper}>

        <Paper  zDepth={3} rounded={false}>

          <Tabs
            value={this.state.tab_value}
            onChange={this.tabChange} >

            <Tab label="Вход" value="a" >

              <div className={classes.sub_paper} >

                <TextField
                  ref="login"
                  hintText="login"
                  floatingLabelText="Имя пользователя"
                  fullWidth={true}
                  defaultValue={this.props.login}
                  onChange={this.handleTextChange}
                />

                <TextField
                  ref="password"
                  hintText="password"
                  floatingLabelText="Пароль"
                  fullWidth={true}
                  type="password"
                  defaultValue={this.props.password}
                  onChange={this.handleTextChange}
                />
                <br />

                <RaisedButton label="Войти"
                              disabled={this.state.btn_login_disabled}
                              className={classes.button}
                              onTouchTap={this.handleLogin} />

                <RaisedButton label="Забыли пароль?"
                              disabled={true}
                              className={classes.button} />

              </div>

            </Tab>

            <Tab label="Подключение" value="b">

              <div className={classes.sub_paper} >

                <TextField
                  floatingLabelText="Область данных"
                  hintText="zone"
                  fullWidth={true}
                  onChange={this.valueToState("zone")}
                  value={this.state.zone} />

                <TextField
                  floatingLabelText="Адрес CouchDB"
                  hintText="couch_path"
                  fullWidth={true}
                  onChange={this.valueToState("couch_path")}
                  value={this.state.couch_path}/>

                <Toggle
                  label="Разрешить сохранение пароля"
                  className={classes.toggle}
                  onToggle={() => this.setState({ enable_save_pwd: !this.state.enable_save_pwd })}
                  toggled={this.state.enable_save_pwd} />

                <Divider />

                <RaisedButton label="Сохранить настройки"
                              className={classes.button}
                              onTouchTap={::this.handleSetPrm} />

              </div>

            </Tab>

          </Tabs>

        </Paper>

      </div>

    )
  }
}
