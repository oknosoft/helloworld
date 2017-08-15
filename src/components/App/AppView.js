import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router';

// сообщения в верхней части страницы (например, обновить после первого запуска)
import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';

// навигация
import Header from 'metadata-react/Header';
import items from './menu_items'; // массив элементов меню

// заставка "загрузка занных"
import DumbScreen from '../DumbScreen';

// вложенный маршрутизатор страниц с данными
import DataRoute from '../DataRoute';

// домашняя страница, в данном проекте - просто редирект на список заказов
import HomeView from '../HomeView';

// информация о программе
import AboutPage from '../About';

// 404
import NotFoundPage from '../NotFoundPage';

// дерево метаданных
import MetaTreePage from '../MetaTreePage';

// логин и свойства подключения
import FrmLogin from 'metadata-react/FrmLogin';

import withNavigateAndMeta from 'metadata-redux/src/withNavigateAndMeta';

class AppRoot extends Component {

  componentDidMount() {
    const {handleOffline} = this.props;
    this._online = handleOffline.bind(this, false);
    this._offline = handleOffline.bind(this, true);
    window.addEventListener('online', this._online, false);
    window.addEventListener('offline', this._offline, false);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this._online);
    window.removeEventListener('offline', this._offline);
  }

  shouldComponentUpdate(props) {
    const {user, data_empty, couch_direct, offline, history, path_log_in} = props;
    let res = true;

    // если есть сохранённый пароль и online, пытаемся авторизоваться
    if (!user.logged_in && user.has_login && !user.try_log_in && !offline) {
      props.handleLogin();
      res = false;
    }

    // если это первый запуск или couch_direct и offline, переходим на страницу login
    if (!path_log_in && ((data_empty === true && !user.try_log_in) || (couch_direct && !user.logged_in))) {
      history.push('/login');
      res = false;
    }

    return res;
  }

  handleNavigate() {
    const {handleNavigate, first_run} = this.props;
    if (first_run) {
      $p.eve && ($p.eve.redirect = true);
      location.replace('/');
    }
    else {
      handleNavigate('/');
    }
  }

  render() {

    const {props} = this;

    return (
      <div>
        <Header items={items} {...props} />
        {
          (!props.path_log_in && !props.complete_loaded) ?
            <DumbScreen
              title={props.doc_ram_loaded ? "Подготовка данных в памяти..." : "Загрузка из IndexedDB..."}
              page={{text: props.doc_ram_loaded ? 'Цены и характеристики...' : 'Почти готово...'}}
              top={92} />
            :
            <Switch>
              <Route exact path="/" render={(routeProps) => <HomeView handleNavigate={props.handleNavigate} {...routeProps} />} />
              <Route path="/:area(doc|cat|ireg|cch|rep).:name" component={DataRoute} />
              <Route path="/about" component={AboutPage} />
              <Route path="/meta" component={MetaTreePage} />
              <Route path="/login" component={FrmLogin} />
              <Route component={NotFoundPage} />
            </Switch>
        }

        <Snackbar
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
          open={props.first_run && props.doc_ram_loaded}
          message={<span>Требуется перезагрузить страницу после первой синхронизации данных</span>}
          action={<Button color="accent" onClick={this.handleNavigate.bind(this)}>Выполнить</Button>}
        />

      </div>
    );
  }
};

AppRoot.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  handleOffline: PropTypes.func.isRequired,
  handleNavigate: PropTypes.func.isRequired,
  first_run: PropTypes.bool.isRequired,
};

export default withNavigateAndMeta(AppRoot);

