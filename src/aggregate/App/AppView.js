import * as React from 'react';
import {RouterProvider} from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import Helmet from 'react-helmet';
import {router} from './Router';
import Loading from './Loading';

import {initialTitle, TitleContext} from './titleContext';
import {BackdropContext} from './backdropContext';
const bsx = { color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 };

export default function AppView(props) {
  const [{description, title, appTitle}, setTitleState] = React.useState(initialTitle);
  const [backdropOpen, setBackdropState] = React.useState(false);
  const [snack, setSnackState] = React.useState('');
  const [confirm, setConfirmState] = React.useState(null);


  const setTitle = React.useMemo(() => (newState) => {
    setTitleState(prevState => ({...prevState, ...newState}));
  }, []);

  const [setBackdrop, setSnack, snackClose, setConfirm, setConfirmClose] = React.useMemo(() => [
    (newOpen) => {
      setBackdropState(newOpen);
      return Promise.resolve();
    },

    (newSnack) => {
      setSnackState(newSnack);
      return Promise.resolve();
    },

    () => setSnackState(''),

    ({text, title = 'Внимание', actions = []}) => {
      return new Promise(({resolve, reject}) => {
        if (confirm) {
          return reject(new Error('Уже открыт системный диалог'));
        }
        setConfirmState({text, title, actions});
      });
    },

    () => setConfirmState(null),
  ]);

  return <TitleContext.Provider value={{ description, title, appTitle, setTitle }}>
    <Helmet title={title}/>
    <Backdrop sx={bsx} open={backdropOpen}>
      <CircularProgress color="inherit" />
    </Backdrop>
    <Snackbar
      open={Boolean(snack)}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={3000}
      onClose={snackClose}
      message={snack}
      //action={action}
    />
    <BackdropContext.Provider value={{backdropOpen, setBackdrop, snack, setSnack, setConfirm, setConfirmClose}}>
      <RouterProvider router={router} fallbackElement={<Loading/>}/>
    </BackdropContext.Provider>
  </TitleContext.Provider>;
}
