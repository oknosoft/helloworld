import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconHome from '@mui/icons-material/Home';
import {useNavigate} from 'react-router-dom';

import {drawerWidth, disablePermanent, DrawerHeader} from './styled';
import menuItems from '../App/menu';

const DrawerLeft = ({menu_open, sxColor, handleDrawerClose}) => {

  const navigate = useNavigate();

  return <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant={disablePermanent ? 'temporary' : 'persistent'}
    anchor="left"
    open={menu_open}
  >
    <DrawerHeader sx={{...sxColor, boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 7%)'}}>
      <ListItem sx={{flex: 1}} disablePadding onClick={() => {
        navigate('/');
        if (disablePermanent) {
          handleDrawerClose();
        }
      }}>
        <ListItemButton>
          <ListItemIcon>
            <IconHome />
          </ListItemIcon>
          <ListItemText primary="Главная" />
        </ListItemButton>
      </ListItem>
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeftIcon />
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
      {menuItems.map(({text, icon, path, divider}, index) => {
        return divider ?
          <Divider key={`divider-${index}`} /> :
          <ListItem key={`menu-${index}`} disablePadding>
            <ListItemButton onClick={() => {
              navigate(path);
              if (disablePermanent) {
                handleDrawerClose();
              }
            }}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>;
      })}
    </List>
  </Drawer>;
};

export default DrawerLeft;
