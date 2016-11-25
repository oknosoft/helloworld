/**
 * Самый верхний уровень - провайдер redux и router
 * Здесь же, подключаем индикатор состояния загрузки приложения
 * и обработчик роутинга на login при первом запуске
 */

import React, {Component, PropTypes} from "react";
import {Router} from "react-router";
import {Provider} from "react-redux";
import {LOCATION_CHANGE} from "react-router-redux";

// эти стили после отладки можно будет объединить в один файл
import "metadata-react-ui/combined.css";
import "metadata-react-ui/react-data-grid.css";
import "metadata-react-ui/metadata-react-ui.css";

import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";
//import 'react-flex-layout/react-flex-layout-splitter.css'

import "styles/core.scss";


import DumbScreen from "components/DumbLoader/DumbScreen";

// стили MuiTheme для material-ui
import MuiThemeProvider, {styles, muiTheme} from "./AppMuiTheme";

// функция установки параметров сеанса
import settings from "../../../config/app.settings";

// собственно, metaengine, скрипт инициализации структуры метаданных и модификаторы
import $p, { meta_init, modifiers } from "metadata";


class AppContainer extends Component {

	static propTypes = {
		history: PropTypes.object.isRequired,
		routes: PropTypes.object.isRequired,
		store: PropTypes.object.isRequired
	}

	// эти свойства будут доступны в контексте детей
	static childContextTypes = {
		$p: React.PropTypes.object.isRequired,
		store: React.PropTypes.object.isRequired,
		handleLocationChange: React.PropTypes.func.isRequired
	}

	static handleLocationChange() { }

	getChildContext() {
		const {store} = this.props
		return {
			$p,
			store,
			handleLocationChange: AppContainer.handleLocationChange
		}
	}

	constructor(props) {

		super(props)

    AppContainer.handleLocationChange = ::this.handleLocationChange
    $p.rx_actions.handleLocationChange = AppContainer.handleLocationChange

	}

  handleLocationChange(pathname, search = '', hash = '') {

    const {store, history} = this.props
    const loc = history.getCurrentLocation()

    if(pathname && pathname.indexOf('/') == 0){
      pathname = pathname.substr(1);
    }

    if('/' + pathname == loc.pathname){
      return
    }

    if(loc.basename != '/'){
      history.replace('/')
    }

    store.dispatch({
      type: LOCATION_CHANGE,
      payload: {pathname: pathname, search, hash}
    })
  }

	// TODO: перенести генератор событий начальной загрузки в metadata-redux
	subscriber(store) {

		function select(state) {

			const {meta} = state,
				res = {};

			pnames.forEach(function (name) {
				res[name] = meta[name]
			})

			return res
		}

		let t = this,
			pnames = ['meta_loaded', 'data_empty', 'data_loaded', 'fetch_local', 'sync_started', 'page'],
			current_state = select(store.getState());

		function handleChange() {
			let previous_state = current_state
			current_state = select(store.getState())

			pnames.some(function (name) {
				if (current_state[name] != previous_state[name]) {
					t.setState(current_state)
					return true;
				}
			})
		}

		return handleChange

	}

	// вызывается один раз на клиенте и сервере при подготовке компонента
	componentWillMount() {

		const {store} = this.props

		setTimeout(() => {

			// инициализируем параметры сеанса и метаданные
			$p.wsql.init(settings, meta_init)

			// подключаем обработчики событий плагином metadata-redux
			$p.rx_events(store)

			// выполняем модификаторы
      modifiers($p)

			// информируем хранилище о готовности MetaEngine
			store.dispatch($p.rx_actions.META_LOADED($p))

			// читаем локальные данные в ОЗУ
			$p.adapters.pouch.load_data();

			// подписываемся на события хранилища
			store.subscribe(this.subscriber(store))

		})

	}

	render() {

		const {history, routes, store} = this.props

		const meta = store.getState().meta

		// при первом старте и при загрузке данных, минуя роутинг показываем заставку
		// если пустые данные, перебрасываем на страницу авторизации
		//
		// if(!meta_loaded) - заглушка заставка
		// if(data_empty && route.path != '/login') - перебросить в login
		// if(fetch_local && !data_loaded)

		if (!meta.meta_loaded) {
			return (
				<DumbScreen />
			)
		}

		if (meta.data_empty) {
			if (routes.path.indexOf('/login') == -1) {
				AppContainer.handleLocationChange('login')
			}
		} else {

		}

		if (!meta.data_loaded && meta.fetch_local) {
			return (
				<DumbScreen
					title="Загрузка данных из IndexedDB..."
					page={meta.page}
				/>
			)
		}

		return (
			<Provider store={store}>
				<MuiThemeProvider muiTheme={muiTheme}>
					<div style={ styles.container }>
						<Router history={history} children={routes}/>
					</div>
				</MuiThemeProvider>
			</Provider>
		)
	}

}

export default AppContainer
