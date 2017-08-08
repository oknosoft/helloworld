import React from 'react';
import IconDrafts from 'material-ui-icons/Drafts';
import IconInbox from 'material-ui-icons/Inbox';
import IconList from 'material-ui-icons/List';
import IconInfo from 'material-ui-icons/Info';
import IconPerson from 'material-ui-icons/Person';

const items = [
  {
    text: 'Перемещение денег',
    navigate: '/doc.cash_moving/list',
    icon: <IconDrafts/>
  },
  {
    text: 'Отчеты',
    icon: <IconInbox/>,
    open: true,
    items: [
      {
        text: 'Движение денег',
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
    text: 'О программе',
    navigate: '/about',
    icon: <IconInfo/>
  }
];

export default items;
