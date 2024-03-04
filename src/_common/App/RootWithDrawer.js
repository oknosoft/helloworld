import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {useLoadingContext} from '../Metadata';
import Drawer from './Drawer';
import ErrorBoundary from './ErrorBoundary';
import {Main, AppBar, Space, Root} from './styled';

export default function RootWithDrawer(props) {

  const theme = useTheme();
  const sxColor = {
    backgroundColor: theme.palette.primary[50],
    color: theme.palette.primary.dark,
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%)',
  };

  const {handleIfaceState, ifaceState: {menu_open}} = useLoadingContext();

  const handleDrawerOpen = () => {
    handleIfaceState({menu_open: true});
  };

  const handleDrawerClose = () => {
    handleIfaceState({menu_open: false});
  };

  return <Root>
    <CssBaseline />
    <AppBar menu_open={menu_open} handleDrawerOpen={handleDrawerOpen} sxColor={sxColor}/>
    <Drawer menu_open={menu_open} theme={theme} handleDrawerClose={handleDrawerClose} sxColor={sxColor}/>
    <Main open={menu_open}>
      <Space />
      <ErrorBoundary />
    </Main>
  </Root>;

}
