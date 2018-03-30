// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Helmet from 'react-helmet';
import AppFooter from './Footer';
import styles from './styles';

const ltitle = 'Демо metadata.js';
const htitle = 'Metadata hello world';

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
      <Helmet title={htitle}/>

      <div className={classes.hero}>
        <div className={classes.content}>

          <div className={classes.text}>
            <Typography variant="display1" component="h1" color="inherit" noWrap style={{marginBottom: 24}}>Metadata hello world</Typography>
            <Typography variant="subheading" component="h2" color="inherit" className={classes.headline}>
              Каркас приложения на metadata.js<br/> для демонстрации базовых возможностей фреймворка
            </Typography>
            <Button className={classes.button} variant="raised" onClick={() => handleNavigate('/help')}>Начать</Button>
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
