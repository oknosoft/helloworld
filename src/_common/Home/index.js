import React from 'react';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import {useLoadingContext} from '../Metadata';
import {useTitleContext} from '../App';
import {Padding, Content} from '../App/styled';

const title = {title: 'Заказ дилера', appTitle: <Typography variant="h6" noWrap>Заказ дилера</Typography>};
export default function Login({pfilter}) {
  const {setTitle} = useTitleContext();
  const {ifaceState: {complete_loaded}} = useLoadingContext();
  const navigate = useNavigate();
  const auth = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/login?return=/');
  };

  React.useEffect(() => setTitle(title), []);


  return <Content>
    <Padding><Typography variant="h6">Статистика сводно</Typography></Padding>
    {complete_loaded ? 'Wraper(Report)' : <Padding>
      <Typography component="span">Для просмотра отчёта, </Typography>
      <Typography component="a" href="/login?return=/" onClick={auth}>авторизуйтесь</Typography>
    </Padding>}
  </Content>;
}
