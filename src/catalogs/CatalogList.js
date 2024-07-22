import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useBackdropContext} from '@oknosoft/ui/dist/App/backdropContext';
import List from '@oknosoft/ui/dist/DataList/List';
import Toolbar from '@oknosoft/ui/dist/DataList/Toolbar';
import {Content, Relative} from '@oknosoft/ui/dist/App/styled';
import {rowKeyGetter, cellClick, cellKeyDown, mgrCreate, isAtBottom} from '@oknosoft/ui/dist/App/dataGrid';
import {columns} from './columns';

const sort = $p.utils.sort('name');

export default function FlatList(props) {
  let {mgr, meta, owner} = props;
  const navigate = useNavigate();
  const backdrop = useBackdropContext();
  const [selectedRows, setSelectedRows] = React.useState(new Set());
  const {rows} = React.useMemo(() => {
    const rows = [];
    for(const o of mgr) {
      if(!o.empty()) {
        rows.push(o);
      }
    }
    rows.sort(sort);
    return {rows};
  }, [mgr]);

  const getCurrent = () => selectedRows.size ? mgr.get(Array.from(selectedRows)[0]) : null;

  const handleSelect = () => {
    const current = getCurrent();
    current && props?.handleSelect?.(current);
  };

  const listDoubleClick = () => {
    const current = getCurrent();
    if(current) {
      owner ? handleSelect() : open();
    }
  };

  const [create, clone, open] = mgrCreate({mgr, navigate, selectedRows, backdrop});

  const onCellClick = cellClick({selectedRows, setSelectedRows});

  return <Content>
    <Toolbar mgr={mgr} meta={meta} selectionMode={owner} create={create} clone={clone} open={open}/>
    <Relative>
      <List
        rows={rows}
        columns={columns}
        onDoubleClick={listDoubleClick}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />
    </Relative>
  </Content>;
}
