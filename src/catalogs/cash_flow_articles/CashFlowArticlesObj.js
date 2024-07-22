import React from 'react';
import Typography from '@mui/material/Typography';
import frmObj from '@oknosoft/ui/dist/DataObj/frmObj';
import ObjToolbar from '@oknosoft/ui/dist/DataObj/Toolbar';
import {Root} from '@oknosoft/ui/dist/DataObj/styled';
import Loading from '@oknosoft/ui/dist/App/Loading';
import {key, mgr, setting as initSetting} from './ObjSetting';
import CashFlowArticlesjHead from './ObjHead';

export default function CashFlowArticlesObj(props) {
  const {
    obj, setObj,
    error, setError,
    tab, setTab, tabRef,
    modified, setModified,
    settingOpen, setSettingOpen,
    setting, saveSetting,
    params, usePrompt, setTitle, setBackdrop,
  } = frmObj({initSetting});

  React.useEffect(() => {
    const {ref} = params;
    Promise.resolve().then(() => mgr.get(ref))
      //.then((doc) => doc.load_linked_refs())
      .then(setObj)
      .catch(setError)
      .then(() => setBackdrop(false));
  }, []);

  React.useEffect(() => {
    const title = obj ? obj.presentation : 'Валюта';
    setTitle({title, appTitle: <Typography variant="h6" noWrap>{title}</Typography>});
  }, [obj, modified]);

  return obj ?
    <Root>
      <ObjToolbar obj={obj} mgr={mgr} setSettingOpen={setSettingOpen} />
      <CashFlowArticlesjHead obj={obj} />
    </Root>
    :
    <Loading>
      <Typography>Загрузка...</Typography>
    </Loading>;
}
