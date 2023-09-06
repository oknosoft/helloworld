/**
 * Created 21.06.2019.
 */

import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {directLogins} from './providers';
import Text from '../../packages/ui/DataField/Text';

const prevent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};
export default function Creditales({provider, login, password, loginChange, handleLogin}) {

  const [showPassword, handleShowPasssword] = React.useState(false);

  if(!directLogins.includes(provider)) {
    return null;
  }

  return <>
    <Text
      fullWidth
      meta={{synonym: 'Логин', placeholder: 'login'}}
      value={login}
      onChange={(value) => loginChange([value, password])}
      inputProps={{id: 'username', name: 'username'}}
    />
    <FormControl fullWidth>
      <InputLabel>Пароль</InputLabel>
      <Input
        type={showPassword ? 'text' : 'password'}
        inputProps={{placeholder: 'password', id: 'password', name: 'password'}}
        value={password}
        onChange={({target}) => {
          loginChange([login, target.value]);
        }}
        onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleShowPasssword}
              onMouseDown={prevent}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  </>;
}
