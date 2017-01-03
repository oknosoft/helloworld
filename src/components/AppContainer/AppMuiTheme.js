import {deepOrange500} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


export const styles = {
  container: {
    height: '100%'
  },
};

export const muiTheme = getMuiTheme({

  palette: {
    accent1Color: deepOrange500,
  },

  appBar: {
    height: 48
  },

  // zIndex: {
  //   menu: 1000,
  //   appBar: 1100,
  //   drawerOverlay: 1200,
  //   drawer: 1300,
  //   dialogOverlay: 1400,
  //   dialog: 1500,
  //   layer: 2000,
  //   popover: 2100,
  //   snackbar: 2900,
  //   tooltip: 60000
  // },

  // spacing: {
  //   iconSize: 24,
  //
  //   desktopGutter: 24,
  //   desktopGutterMore: 32,
  //   desktopGutterLess: 16,
  //   desktopGutterMini: 8,
  //   desktopKeylineIncrement: 64,
  //   desktopDropDownMenuItemHeight: 32,
  //   desktopDropDownMenuFontSize: 15,
  //   desktopDrawerMenuItemHeight: 48,
  //   desktopSubheaderHeight: 48,
  //   desktopToolbarHeight: 56,
  // }

});

export default MuiThemeProvider;
