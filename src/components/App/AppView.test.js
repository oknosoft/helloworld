import React from 'react';
import ReactDOM from 'react-dom';
import AppView from './AppViewTemporaryDrawer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppView />, div);
});
