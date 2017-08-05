/**
 * ### Уровень под провайдером и роутингом
 */

import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Header from "./Header";
import navlist_items from "../App/navlist_items";
import { navlist_open } from "store/ifaceReducer";
import { muiTheme } from "./AppMuiTheme";
import styles from "styles/CoreLayout.scss";

let data_empty_timer
class CoreLayout extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      data_empty: false
    };

    this.componentMounted = false;
  }

  componentDidMount() {
    this.componentMounted = true;
  }

  componentWillUnmount() {
    this.componentMounted = false;

    if (data_empty_timer) {
      clearTimeout(data_empty_timer)
    }
  }

  render() {
    const { props } = this;

    if (props.data_empty) {
      this.state.data_empty = true;

      if (data_empty_timer) {
        clearTimeout(data_empty_timer)
      }

      data_empty_timer = setTimeout(() => {
        data_empty_timer = 0

        if (this.componentMounted) {
          this.setState({
            data_empty: false
          })
        }
      }, 4000)
    }

    return (
      <div className={styles.coreLayout}>
        <div className={styles.coreLayoutHeader}>
          <Header {...props} navlist_items={navlist_items} />
        </div>

        <div className={styles.coreLayoutContent}>
          {React.cloneElement(props.children, { data_empty: this.state.data_empty })}
        </div>
      </div>
    );
  }
}

// TODO: переместить mapStateToProps и mapDispatchToProps в более приличное место
const mapDispatchToProps = {
  handleNavlistOpen: navlist_open
}

// здесь state - это состояние хранилища, а не состояние компонента
function mapStateToProps(state, props) {

  const {meta, iface} = state

  return {
    title: "Hello world",
    state_user: meta.user,

    sync_started: meta.sync_started,
    show_indicator: meta.fetch_remote || meta.fetch_local,
    logged_in: meta.user.logged_in,
    data_empty: meta.data_empty,
    navlist_open: iface.navlist_open,
    show_notifications: false,

    sync_tooltip: meta.sync_started ? "Синхронизация выполняется" : "Синхронизация отключена",
    notifications_tooltip: "Сообщений нет",
    button_label: (state.meta.user.logged_in || state.meta.user.defined) ? state.meta.user.name : "Вход / регистрация",

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
