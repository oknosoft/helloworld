import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Autocomplete from '../../packages/ui/DataField/Autocomplete';
import Provider from './Provider';
import Creditales from './Creditales';
import Progress from './Progress';
import {LoginRoot} from './Root';
import {abonentInit, abonentDeps} from './initLogin';
import {useTitleContext} from '../App';
import {useLoadingContext} from '../Metadata';

const title = {title: 'Авторизация', appTitle: <Typography variant="h6" noWrap>Авторизация</Typography>};
export default function Login({pfilter, common_loaded}) {
  const [[abonent, abonentOptions], setAbonent] = React.useState([null, []]);
  const [[branch, branchesOptions], setBranch] = React.useState([null, []]);
  const [[provider, providers], setProvider] = React.useState(['', []]);
  const [yearState, setYear] = React.useState([new Date().getFullYear(), [new Date().getFullYear()]]);
  const [year, years] = yearState;
  const [[login, password], loginChange] = React.useState(['', '']);
  const {setTitle} = useTitleContext();
  const {ifaceState: {user, page}} = useLoadingContext();

  React.useEffect(() => {
    common_loaded && abonentInit({setAbonent, setProvider, pfilter});
    setTitle(title);
  }, [common_loaded]);
  React.useEffect(() => abonentDeps({setBranch, setYear, yearState, abonent}), [abonent]);

  const abonentChange = (event, value) => setAbonent(([old, options]) => [value, options]);
  const branchChange = (event, value) => setBranch(([old, options]) => [value, options]);
  const yearChange = (event, value) => setYear(([old, options]) => [value, options]);
  const providerChange = (event, value) => {
    setProvider(([old, options]) => [value.value, options]);
  };

  const handleLogin = () => {
    if(!user.logged_in && !user.try_log_in) {
      return $p.adapters.pouch.log_in(login, password);
    }
  };

  return <LoginRoot>
    <Typography variant="h6" sx={{paddingBottom: 1}}>Для доступа к разделу, необходима авторизация</Typography>
    {abonent ? <>
      <Autocomplete options={abonentOptions} value={abonent} onChange={abonentChange} label="Абонент" fullWidth/>
      <Autocomplete options={years} value={year} onChange={yearChange} label="Год" title="База архива" fullWidth/>
      <Autocomplete
        options={branchesOptions}
        value={branch}
        onChange={branchChange}
        label="Отдел"
        title="Отдел абонента"
        fullWidth
        readOnly={!branchesOptions.length}
      />
      <Provider options={providers} value={provider} providerChange={providerChange}/>
      <Creditales provider={provider} login={login} password={password} loginChange={loginChange} handleLogin={handleLogin}/>
      <Stack direction="row" justifyContent="flex-end" spacing={1} mt={2} mb={1}>
        <Button disabled={user.try_log_in || user.logged_in} onClick={handleLogin}>Войти</Button>
      </Stack>
      <Progress user={user} page={page}/>
    </> : <CircularProgress />}
  </LoginRoot>;
}
