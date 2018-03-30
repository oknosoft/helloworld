import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Helmet from 'react-helmet';
import CnnSettings from 'metadata-react/FrmLogin/CnnSettings';
import compose from 'recompose/compose';
import withStyles from 'metadata-react/styles/paper600';
import {withIface, withPrm} from 'metadata-redux';

const ltitle = 'Настройки';

function Settings(props) {

  const {classes, title} = props;

  if(title != ltitle) {
    props.handleIfaceState({
      component: '',
      name: 'title',
      value: ltitle,
    });
  }

  return <Paper className={classes.root} elevation={4}>
      <Helmet title={ltitle} />
      <Typography variant="title" style={{paddingTop: 16}}>Подключение к базе данных</Typography>
      <CnnSettings {...props} />
    </Paper>;

}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  handleIfaceState: PropTypes.func.isRequired,
};

export default compose(withStyles, withIface, withPrm)(Settings);
