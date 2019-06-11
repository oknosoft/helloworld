import {withStyles} from '@material-ui/styles';

const styles = theme => ({
  '@global': {
    html: {},
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {},
  },
  root: {
    //display: 'flex',
    alignItems: 'stretch',
    minHeight: 'calc(100vh - 80px)',
    width: '100%',
  },
  title: {
    marginLeft: theme.spacing(),
    flex: '1 1 auto',
    fontSize: '1.1rem',
    fontWeight: 400,
  },
  appBar: {
    transition: theme.transitions.create('width'),
  },
  appBarHome: {
    boxShadow: 'none',
  },
  appBarShift: {
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 280px)',
    },
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: 280,
    },
    // '& h6': {
    //   fontWeight: 400,
    // },
  },
  navIconHide: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
});

export default withStyles(styles, {name: 'AppView'});
