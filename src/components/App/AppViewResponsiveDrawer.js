import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
//import Tooltip from 'material-ui/Tooltip';
import MenuIcon from 'material-ui-icons/Menu';
import {Switch, Route} from 'react-router';
import {withIfaceAndMeta} from 'metadata-redux';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';        // сообщения в верхней части страницы (например, обновить после первого запуска)
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';                        // диалог сообщения пользователю

import items from '../../pages';                    // массив элементов меню
import DumbScreen from '../DumbScreen';             // заставка "загрузка занных"
import DataRoute from '../DataRoute';               // вложенный маршрутизатор страниц с данными
import MarkdownRoute from '../MarkdownRoute';       // вложенный маршрутизатор страниц с Markdown, 404 живёт внутри Route
import HomeView from '../../pages/Home';            // домашняя страница
import MetaTreePage from '../MetaTreePage';         // дерево метаданных
import FrmLogin from 'metadata-react/FrmLogin';     // логин и свойства подключения
import Settings from '../Settings';                 // страница настроек приложения
import {item_props} from '../../pages';             // метод для вычисления need_meta, need_user для location.pathname

import NeedAuth from 'metadata-react/App/NeedAuth';
import AppDrawer from 'metadata-react/App/AppDrawer';
import HeaderButtons from 'metadata-react/Header/HeaderButtons';

import withStyles from './styles';

// основной layout
class AppView extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleAlertClose = this.handleDialogClose.bind(this, 'alert');
    const iprops = item_props();
    this.state = {
      need_meta: !!iprops.need_meta,
      need_user: !!iprops.need_user,
      mobileOpen: false,
    };
  }

  shouldComponentUpdate(props, {need_user, need_meta}) {
    const {meta_loaded, user, offline} = props;
    const iprops = item_props();
    let res = true;

    if(need_user != !!iprops.need_user) {
      this.setState({need_user: !!iprops.need_user});
      res = false;
    }

    if(need_meta != !!iprops.need_meta) {
      this.setState({need_meta: !!iprops.need_meta});
      res = false;
    }

    // если есть сохранённый пароль и online, пытаемся авторизоваться
    if(meta_loaded && !user.logged_in && user.has_login && !user.try_log_in && !offline) {
      props.handleLogin();
      res = false;
    }

    return res;
  }

  handleDialogClose(name) {
    this.props.handleIfaceState({component: '', name, value: {open: false}});
  }

  handleReset(reset) {
    const {handleNavigate, first_run} = this.props;
    (first_run || reset) ? location.replace('/') : handleNavigate('/');
  };

  handleDrawerToggle = () => {
    this.setState({mobileOpen: !this.state.mobileOpen});
  };

  handleDrawerClose = () => {
    this.setState({mobileOpen: false});
  };

  renderHome = (routeProps) => {
    const {classes, title, handleNavigate, handleIfaceState} = this.props;
    const {root, hero, content, text, headline, button, logo} = classes;
    return <HomeView
      classes={{root, hero, content, text, headline, button, logo}}
      title={title}
      handleNavigate={handleNavigate}
      handleIfaceState={handleIfaceState}
      {...routeProps}
    />;
  };

  render() {
    const {props, state} = this;
    const {classes, handleNavigate, location, snack, alert, doc_ram_loaded, title, sync_started, fetch, user, couch_direct, offline, meta_loaded} = props;
    const isHome = location.pathname === '/';

    let disablePermanent = false;
    let navIconClassName = '';
    let appBarClassName = classes.appBar;

    if(isHome) {
      // home route, don't shift app bar or dock drawer
      disablePermanent = true;
      appBarClassName += ` ${classes.appBarHome}`;
    }
    else {
      navIconClassName = classes.navIconHide;
      appBarClassName += ` ${classes.appBarShift}`;
    }

    return [
      // основной layout
      <div key="content" className={classes.root}>
        <AppBar className={appBarClassName}>
          <Toolbar disableGutters>
            <IconButton
              color="contrast"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={navIconClassName}
            >
              <MenuIcon/>
            </IconButton>

            <Typography className={classes.title} type="title" color="inherit" noWrap>{title || 'Metadata'}</Typography>

            <HeaderButtons
              sync_started={sync_started}
              fetch={fetch}
              offline={offline}
              user={user}
              handleNavigate={handleNavigate}
            />

          </Toolbar>
        </AppBar>
        <AppDrawer
          className={classes.drawer}
          disablePermanent={disablePermanent}
          onRequestClose={this.handleDrawerClose}
          mobileOpen={this.state.mobileOpen}
          handleNavigate={handleNavigate}
          items={items}
          isHome={isHome}
          title="Metadata hello"
        />
        {
          // основной контент
          meta_loaded && state.need_user && ((!user.try_log_in && !user.logged_in) || (couch_direct && offline)) ?
            <NeedAuth
              handleNavigate={handleNavigate}
              handleIfaceState={props.handleIfaceState}
              title={title}
              offline={couch_direct && offline}
            />
            :
            (
              (!location.pathname.match(/\/login$/) && ((state.need_meta && !meta_loaded) || (state.need_user && !props.complete_loaded))) ?
                <DumbScreen
                  key="dumb"
                  title={doc_ram_loaded ? 'Подготовка данных в памяти...' :
                    (user.try_log_in ? 'Авторизация на сервере CouchDB...' : 'Загрузка из IndexedDB...')}
                  page={{text: doc_ram_loaded ? 'Индексы в памяти...' : (user.logged_in ? 'Почти готово...' : 'Получение данных...')}}
                />
                :
                <Switch key="switch">
                  <Route exact path="/" render={this.renderHome}/>
                  <Route path="/:area(doc|cat|ireg|cch|rep).:name" component={DataRoute}/>
                  <Route path="/meta" component={MetaTreePage}/>
                  <Route path="/login" component={FrmLogin}/>
                  <Route path="/settings" component={Settings}/>
                  <Route component={MarkdownRoute}/>
                </Switch>
            )
        }
      </div>,

      // всплывающтй snackbar оповещений пользователя
      ((snack && snack.open) || (props.first_run && doc_ram_loaded)) && <Snackbar
        key="snack"
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        open
        message={snack && snack.open ? snack.message : 'Требуется перезагрузить страницу после первой синхронизации данных'}
        action={<Button
          color="accent"
          onClick={snack && snack.open && !snack.reset ? this.handleDialogClose.bind(this, 'snack') : () => this.handleReset(snack && snack.reset)}
        >Выполнить</Button>}
      />,

      // диалог сообщений пользователю
      alert && alert.open && <Dialog key="alert" open onRequestClose={this.handleAlertClose}>
        <DialogTitle>
          {alert.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {alert.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleAlertClose} color="primary">
            Ок
          </Button>
        </DialogActions>
      </Dialog>
    ];
  }
}

AppView.propTypes = {
  handleNavigate: PropTypes.func.isRequired,
  handleIfaceState: PropTypes.func.isRequired,
  first_run: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(withIfaceAndMeta(AppView));
