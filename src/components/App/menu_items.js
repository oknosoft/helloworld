import React from 'react';
import IconDrafts from 'material-ui-icons/Drafts';
import IconChart from 'material-ui-icons/InsertChart';
import IconDoc from 'material-ui-icons/EventNote';
import IconList from 'material-ui-icons/List';
import IconInfo from 'material-ui-icons/Info';
import IconPerson from 'material-ui-icons/Person';
import IconSettings from 'material-ui-icons/Settings';

const items = [
  {
    text: 'Документы',
    icon: <IconDoc/>,
    open: true,
    id: 'docs',
    items: [
      {
        text: 'Перемещение денег',
        id: 'doc_cash_moving',
        navigate: '/doc.cash_moving/list',
        icon: <IconDrafts/>
      },
    ]
  },
  {
    text: 'Отчеты',
    icon: <IconChart/>,
    open: true,
    id: 'reports',
    items: [
      {
        text: 'Движение денег',
        id: 'rep_cash_moving',
        navigate: '/rep.cash_moving/main',
        icon: <IconList/>
      }
    ]
  },
  {
    text: 'Профиль',
    navigate: '/login',
    icon: <IconPerson/>
  },
  {
    text: 'Настройки',
    navigate: '/settings',
    icon: <IconSettings/>,
  },
  {
    text: 'О программе',
    navigate: '/about',
    icon: <IconInfo/>
  }
];

export default items;
