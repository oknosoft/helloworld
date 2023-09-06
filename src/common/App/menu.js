import React from 'react';
import IconInfo from '@mui/icons-material/Info';
import IconPerson from '@mui/icons-material/Person';
import IconSettings from '@mui/icons-material/Settings';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import StoreIcon from '@mui/icons-material/Store';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import IconHelp from '@mui/icons-material/Help';
import FactoryIcon from '@mui/icons-material/Factory';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
//import IconDownload from '@mui/icons-material/CloudDownload';
//import IconAccessibility from '@mui/icons-material/AccessibilityNew';
//import IconChart from '@mui/icons-material/InsertChart';
//import IconDoc from '@mui/icons-material/EventNote';
//import Flask from '../../styles/icons/Flask';
//import IconDrafts from '@mui/icons-material/Drafts';
//import IconList from '@mui/icons-material/List';

export const description = 'Заказ дилера';

const items = [
  {
    text: 'Расчёты-заказы',
    icon: <BusinessCenterIcon/>,
    path: '/doc/calc_order',
  },
  {
    text: 'Производство',
    icon: <FactoryIcon/>,
    path: '/production',
    aliases: ['/manufacture', '/manufacturing'],
  },
  {
    divider: true,
  },
  {
    text: 'Профиль',
    path: '/login',
    icon: <IconPerson/>
  },
  {
    text: 'Настройки',
    path: '/settings',
    icon: <IconSettings/>,
  },
  {
    text: 'Справка',
    path: '/help',
    icon: <IconHelp/>
  },
  {
    text: 'О программе',
    path: '/about',
    icon: <IconInfo/>
  }
];

function path_ok(path, item) {
  const pos = item.navigate && item.navigate.indexOf(path);
  return pos === 0 || pos === 1;
}

function with_recursion(path, parent) {
  if(path && path != '/'){
    for(const item of parent){
      const props = item.items ? with_recursion(path, item.items) : path_ok(path, item) && item;
      if(props){
        return props;
      }
    }
  }
}

export function item_props(path) {
  if(!path){
    path = location.pathname;
  }
  if(path.endsWith('/')) {
    path = path.substring(0, path.length - 1);
  }

  if(path.indexOf('password-reset') !== -1) {
    return {need_meta: true};
  }

  // здесь можно переопределить нужность meta и авторизованности для корневой страницы
  let res = with_recursion(path, items);
  if(!res && path.indexOf('/') !== -1) {
    res = with_recursion(path.substring(0, path.lastIndexOf('/')), items);
  }
  if(!res && path.match(/\/(doc|cat|ireg|cch|rep)\./)){
    res = {need_meta: true, need_user: false};
  }
  return res || {};
}

export default items;
