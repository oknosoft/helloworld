import React, {Component, PropTypes} from "react";

import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import AppBar from 'material-ui/AppBar';
import {white} from 'material-ui/styles/colors';

import {List, ListItem} from 'material-ui/List';

import IconInfo from 'material-ui/svg-icons/action/info';
import IconList from 'material-ui/svg-icons/action/list';
import IconPerson from 'material-ui/svg-icons/social/person';

import IconInbox from 'material-ui/svg-icons/content/inbox';
import IconDrafts from 'material-ui/svg-icons/content/drafts';
import IconSend from 'material-ui/svg-icons/content/send';
import IconThumbUp from 'material-ui/svg-icons/action/thumb-up';
import IconThumbDown from 'material-ui/svg-icons/action/thumb-down';
import IconMoodBad from 'material-ui/svg-icons/social/mood-bad';
import IconLocalPharmacy from 'material-ui/svg-icons/maps/local-pharmacy';


export default class NavList extends Component {

  static propTypes = {
    navlist_open: PropTypes.bool,
    handleNavlistOpen: PropTypes.func.isRequired
  }

  static contextTypes = {
    handleLocationChange: React.PropTypes.func.isRequired
  }

  handleClose = () => {
    this.props.handleNavlistOpen(false)
  }

  handleToggle = () => {
    this.props.handleNavlistOpen(!this.props.navlist_open)
  }

  handleNavigate = (path) => {

    return () => {
      this.handleClose()
      this.context.handleLocationChange(path)
    }
  }

  render() {
    return (
      <div>
        <IconButton onTouchTap={this.handleToggle} ><NavigationMenu color={white} /></IconButton>
        <Drawer
          docked={false}
          width={300}
          open={this.props.navlist_open}
          onRequestChange={(open) => this.props.handleNavlistOpen(open)}>

          <AppBar
            onLeftIconButtonTouchTap={this.handleClose}
            title={this.props.title}
            titleStyle={{fontSize: 18}} />

          <List>

            <ListItem
              primaryText="Заказы"
              leftIcon={<IconInbox />}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem key={0} primaryText="Черновики" onTouchTap={this.handleNavigate('/doc_calc_order/list/draft')} leftIcon={<IconDrafts />} />,
                  <ListItem key={1} primaryText="Отправлено" onTouchTap={this.handleNavigate('/doc_calc_order/list/sent')} leftIcon={<IconSend />} />,
                  <ListItem key={2} primaryText="Согласовано" onTouchTap={this.handleNavigate('/doc_calc_order/list/confirmed')} leftIcon={<IconThumbUp />} />,
                  <ListItem key={3} primaryText="Отклонено" onTouchTap={this.handleNavigate('/doc_calc_order/list/declined')} leftIcon={<IconThumbDown />} />,
                  <ListItem key={4} primaryText="Сервис" onTouchTap={this.handleNavigate('/doc_calc_order/list/service')} leftIcon={<IconLocalPharmacy />} />,
                  <ListItem key={5} primaryText="Рекламации" onTouchTap={this.handleNavigate('/doc_calc_order/list/complaints')} leftIcon={<IconMoodBad />} />,
                  <ListItem key={6} primaryText="Шаблоны" onTouchTap={this.handleNavigate('/doc_calc_order/list/template')} leftIcon={<IconDrafts />} />,
                  <ListItem key={7} primaryText="Архив" onTouchTap={this.handleNavigate('/doc_calc_order/list/zarchive')} leftIcon={<IconDrafts />} />,
                  <ListItem key={8} primaryText="Все" onTouchTap={this.handleNavigate('/doc_calc_order/list/all')} leftIcon={<IconDrafts />} />,
              ]}/>

          </List>

          <List>

            <ListItem
              primaryText="Отчеты"
              leftIcon={<IconInbox />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem key={0} primaryText="Потребность" onTouchTap={this.handleNavigate('/rep_materials_demand/main')} leftIcon={<IconList />} />,
              ]} />

          </List>

          <ListItem primaryText="Профиль" onTouchTap={this.handleNavigate('login')} leftIcon={<IconPerson />} />
          <ListItem primaryText="О программе" onTouchTap={this.handleNavigate('about')} leftIcon={<IconInfo />} />
        </Drawer>
      </div>
    );
  }
}

