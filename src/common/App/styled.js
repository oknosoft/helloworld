import React from 'react';
import {styled} from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useTitleContext} from './titleContext';
import {toolbarHeight, disablePermanent, drawerWidth} from '../styles/muiTheme';

export {disablePermanent, drawerWidth};

export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })
(({ theme, open }) => ({
  flexGrow: 1,
  //padding: theme.spacing(disablePermanent ? 1 : 2),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: disablePermanent ? 0 : `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  ...(disablePermanent && {width: '100%'}),
}));

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppBar = ({menu_open, handleDrawerOpen, sxColor}) => {
  const {appTitle} = useTitleContext();
  return <StyledAppBar position="fixed" open={menu_open} sx={sxColor}>
    <MuiToolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{mr: 2, ...(menu_open && {display: 'none'})}}
      >
        <MenuIcon/>
      </IconButton>
      {appTitle}
    </MuiToolbar>
  </StyledAppBar>;
};

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingRight: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const Space = styled('div')(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const Root = styled('div')(() => ({display: 'flex'}));

export const Relative = styled('div')(() => ({
  position: 'relative',
  width: '100%',
  height: '100%',
}));

export const Padding = styled('div')(({ theme }) => ({padding: theme.spacing()}));

export const Content = styled('div')(({ theme }) => ({
  height: `calc(100vh - ${toolbarHeight + 1}px)`,
  width: 'calc(100% - 1px)',
  overflow: 'hidden',
  //--blockSize: '100%',
  //boxSizing: 'content-box',
  display: 'flex',
  flexDirection: 'column',
}));

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  backgroundColor: theme.palette.grey["50"],
}));

export const HtmlTooltip = styled(({ className, children, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} ><span>{children}</span></Tooltip>
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    opacity: 0.9,
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 240,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 400,
    border: '1px solid #dadde9',
  },
}));
