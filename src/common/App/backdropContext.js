import {createContext, useContext} from 'react';

const stub = () => Promise.resolve();

export const initialBackdrop = {
  backdropOpen: false,
  setBackdrop: stub,

  snack: '',
  setSnack: stub,

  alert: null,
  setAlert: stub,

  confirm: null,
  setConfirm: stub,

  inputValue: null,
  setInputValue: stub,

};

export const initialSnack = {

};

export const BackdropContext = createContext(initialBackdrop);
export const useBackdropContext = () => useContext(BackdropContext);

