import React, {Component} from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Helmet from 'react-helmet';
import CnnSettings from 'metadata-react/FrmLogin/CnnSettings';
import compose from 'recompose/compose';
import withStyles from 'metadata-react/styles/paper600';
import {withIface, withPrm} from 'metadata-redux';

const ltitle = 'Настройки';

class Settings extends Component {

  componentDidMount() {
    this.shouldComponentUpdate(this.props);
  }

  shouldComponentUpdate({handleIfaceState, title}) {
    if(title != ltitle) {
      handleIfaceState({
        component: '',
        name: 'title',
        value: ltitle,
      });
      return false;
    }
    return true;
  }

  render() {
    const {props} = this;
    return (
      <Paper className={props.classes.root} elevation={4}>
        <Helmet title={props.title} />
        <Typography type="title" style={{paddingTop: 16}}>Подключение к базе данных</Typography>
        <CnnSettings {...props} />
      </Paper>
    );
  }
}

export default compose(withStyles, withIface, withPrm)(Settings);
