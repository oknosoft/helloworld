import React from 'react';
import List from './List';
import Toolbar from './Toolbar';
import {Content, Relative} from '../../../common/App/styled';

const sort = $p.utils.sort('name');
export default function FlatList(props) {
  let {mgr, meta, owner} = props;
  const [selectedRows, setSelectedRows] = React.useState(new Set());
  const {rows, scheme, columns} = React.useMemo(() => {
    const scheme = $p.cat.scheme_settings.get_scheme(mgr.class_name, true);
    const columns = scheme.rx_columns({mode: 'ts', fields: meta.fields, _mgr: mgr});
    const rows = [];
    for(const ref in mgr.by_ref) {
      const o = mgr.by_ref[ref];
      if(!o.empty()) {
        rows.push(o);
      }
    }
    rows.sort(sort);
    return {rows, scheme, columns};
  }, [mgr]);

  const getCurrent = () => selectedRows.size ? mgr.get(Array.from(selectedRows)[0]) : null;

  const handleSelect = () => {
    const current = getCurrent();
    if(current?.is_folder) {
      return this.listDoubleClick();
    }
    current && props?.handleSelect?.(current);
  };

  const listDoubleClick = () => {
    const current = getCurrent();
    if(current?.is_folder) {
      tree.deselect();
      const node = tree.findNode(current);
      if(node) {
        node.expand();
        node.active = true;
      }
      setParent(current);
    }
    else if(current) {
      handleSelect();
    }
  };

  return <Content>
    <Toolbar mgr={mgr} meta={meta} selectionMode={owner}/>
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
