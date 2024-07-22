import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {useLoadingContext} from '../Metadata';
import Drawer from './Drawer';
import ErrorBoundary from './ErrorBoundary';
import {Main, AppBar, Space, Root} from '@oknosoft/ui/dist/App/styled';

export default function RootWithDrawer(props) {

  const theme = useTheme();
  const sxColor = {
    backgroundColor: theme.palette.primary[50],
    color: theme.palette.primary.dark,
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%)',
  };

  const {handleIfaceState, ifaceState: {drawerOpen}} = useLoadingContext();

  const handleDrawerOpen = () => {
    handleIfaceState({drawerOpen: true});
  };

  const handleDrawerClose = () => {
    handleIfaceState({drawerOpen: false});
  };

  return <Root>
    <CssBaseline />
    <AppBar drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen} sxColor={sxColor}/>
    <Drawer drawerOpen={drawerOpen} theme={theme} handleDrawerClose={handleDrawerClose} sxColor={sxColor}/>
    <Main open={drawerOpen}>
      <Space />
      <ErrorBoundary />
    </Main>
  </Root>;

}
