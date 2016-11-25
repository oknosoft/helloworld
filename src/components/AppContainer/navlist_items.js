import React from "react";
import IconDrafts from "material-ui/svg-icons/content/drafts";
import IconInbox from "material-ui/svg-icons/content/inbox";
import IconList from "material-ui/svg-icons/action/list";
import IconInfo from "material-ui/svg-icons/action/info";
import IconPerson from "material-ui/svg-icons/social/person";

export default [
  {
    text: 'Перемещение денег',
    navigate: 'doc_cash_moving/list',
    icon: <IconDrafts />
  },
  {
    text: 'Отчеты',
    icon: <IconInbox />,
    open: true,
    items: [
      {
        text: 'Движение денег',
        navigate: 'rep_cash_moving/main',
        icon: <IconList />
      }
    ]
  },
  {
    text: 'Профиль',
    navigate: 'login',
    icon: <IconPerson />
  },
  {
    text: 'О программе',
    navigate: 'about',
    icon: <IconInfo />
  }
]