import {createTheme} from '@mui/material';
import primary from '@mui/material/colors/blueGrey';

export const toolbarHeight = 50;
export const disablePermanent = window.innerWidth < 640;
export const drawerWidth = 220;

const theme = createTheme({

  // Purple and green play nicely together.
  palette: {
    primary,
  },

  mixins: {
    toolbar: {
      minHeight: toolbarHeight,
    }
  },

  typography: {
    fontSize: 12,
    h4: {
      fontSize: '1.8rem',
      '@media (min-width:1200px)': {
        fontSize: '2rem',
      },
    }
  },

  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application
      },
    },

    MuiTab: {
      styleOverrides: {
        // Name of the slot
        root: ({ ownerState, theme }) => ({
          minHeight: 52,
        }),
      }
    },

    MuiToolbar: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          paddingLeft: theme.spacing(),
          paddingRight: theme.spacing(),
        }),
      }
    },

    MuiCheckbox: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: 6,
        }),
      }
    },

    MuiFormControl: {
      styleOverrides: {
        // Name of the slot
        root: ({ ownerState, theme }) => ({
          minWidth: 300,
          paddingRight: theme.spacing(),
          borderBottom: '1px solid #e8e8e8',
        }),
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        shrink: {
          transform: 'translate(0, 8px)',
        },
        formControl: {
          top: 0,
          left: 0,
          position: 'absolute',
          transform: 'translate(0, 8px)',
          width: '40%',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          zIndex: 'unset',
          '&:hover': {
            whiteSpace: 'normal',
            //background: 'white',
            transform: 'translate(0, 7px)',
          },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          marginLeft: '40%',
          'label + &': {
            marginTop: 0,
          }
        },
      }
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 36,
        },
      }
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          paddingTop: 4,
          paddingBottom: 4,
        },
      }
    },

  },

});

export default theme;

