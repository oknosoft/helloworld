/**
 * Маршрутизатор верхнего уровня
 * {Главная, Настройки, Авторизация, Формы данных, Статьи}
 *
 * Created by Evgeniy Malyarov on 17.04.2018.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createBrowserRouter} from 'react-router-dom';
import {Wraper} from './Wraper';
import RootWithDrawer from './RootWithDrawer';

const Home = React.lazy(() => import('../Home'));
const FrmLogin = React.lazy(() => import('../FrmLogin'));
const Page = React.lazy(() => import('../pages/Page'));
const Help = React.lazy(() => import('../pages/Help'));
const DataRoute = React.lazy(() => import('../Metadata/Router'));

const loginRoute = Wraper(FrmLogin);
const pageRoute = Wraper(Page);

export const router = createBrowserRouter([
  {
    element: <RootWithDrawer />,
    errorElement: <RootWithDrawer />,
    children: [
      {path: "/", element: Wraper(Home)},
      {path: "store", element: pageRoute},
      {path: "about", element: pageRoute},
      {path: "help/*", element: Wraper(Help)},
      {path: "login", element: loginRoute},
      {path: "profile", element: loginRoute},
      {path: "password-reset", element: loginRoute},
      {path: "*", element: Wraper(DataRoute)},
    ],
  },
]);





