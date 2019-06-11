// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Helmet from 'react-helmet';
import AppFooter from './Footer';
import styles from './styles';
import {stitle, ltitle} from '../App/menu_items';

function PageHome(props) {
  const {classes, handleNavigate, title} = props;

  if(title != ltitle) {
    props.handleIfaceState({
      component: '',
      name: 'title',
      value: ltitle,
    });
  }

  return (
    <div className={classes.root}>
      <Helmet title={stitle}/>

      <div className={classes.hero}>
        <div className={classes.content}>

          <div className={classes.text}>
            <Typography variant="h4" component="h1" color="inherit" noWrap style={{marginBottom: 24}}>{ltitle}</Typography>
            <Typography variant="subtitle1" component="h2" color="inherit" className={classes.headline}>
              Каркас приложения на metadata.js<br/> для демонстрации базовых возможностей фреймворка
            </Typography>
            <Button className={classes.button} variant="contained" onClick={() => handleNavigate('/help')}>Начать</Button>
          </div>
        </div>
      </div>
      <AppFooter/>
    </div>
  );
}

PageHome.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  handleNavigate: PropTypes.func.isRequired,
  handleIfaceState: PropTypes.func.isRequired,
};

export default withStyles(styles)(PageHome);
