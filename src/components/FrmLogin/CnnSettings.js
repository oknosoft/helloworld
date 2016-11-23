import React, {Component, PropTypes} from "react";

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';

import classes from "./FrmLogin.scss";

export default class CnnSettings extends Component {

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

    super(props)

    this.state = {
      zone: props.zone,
      couch_path: props.couch_path,
      enable_save_pwd: props.enable_save_pwd
    }
  }

  handleSetPrm(){
    const { zone, couch_path, enable_save_pwd} = this.state
    this.props.handleSetPrm({ zone, couch_path, enable_save_pwd})
  }

  valueToState(name){
    return (event) => this.setState({ [name]: event.target.value })
  }

  render() {

    return (
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
    )
  }
}