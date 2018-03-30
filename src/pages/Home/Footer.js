// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styleSheet = theme => ({
  root: {
    overflow: 'auto',
  },
  layout: {
    padding: theme.spacing.unit * 6,
  },
  list: {
    margin: 0,
    paddingLeft: 0,
    listStyle: 'none',
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
});

function AppFooter(props) {
  const { classes } = props;

  return (
    <footer className={classes.root}>
      <div className={classes.layout}>
        <Typography variant="title" gutterBottom>Быстрые ссылки</Typography>
        <Typography variant="subheading" component="div">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <a href="https://github.com/oknosoft/helloworld" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li className={classes.listItem}>
                  <a href="https://www.facebook.com/oknosoft/" target="_blank" rel="noopener noreferrer">Facebook</a>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <a href="https://github.com/oknosoft/metadata.js" target="_blank" rel="noopener noreferrer">Metadata.js</a>
                </li>
                <li className={classes.listItem}>
                  <a href="https://github.com/oknosoft/flowcon" target="_blank" rel="noopener noreferrer">Дорожная карта</a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Typography>
      </div>
    </footer>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AppFooter);
