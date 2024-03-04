import React from 'react';
import {useTheme} from '@mui/material/styles';
import {Resize, ResizeHorizon} from 'metadata-ui/Resize';
import {Content, Relative} from '../../../_common/App/styled';
import Tree, {buildTree} from './Tree';
import List from './List';
import Toolbar from './Toolbar';

import 'metadata-ui/styles/indicator/index.css';

export default function TreeList(props) {

  let {mgr, meta, owner} = props;

  // const width = frameRect?.width || window.innerWidth * .5;
  // const height = frameRect?.height || window.innerHeight * .6;
  const width = 900;
  const theme = useTheme();

  const [parent, setParent] = React.useState(null);
  const [selectedRows, setSelectedRows] = React.useState(new Set());
  const {tree, scheme, columns} = React.useMemo(() => {
    const scheme = $p.cat.scheme_settings.get_scheme(mgr.class_name, true);
    const columns = scheme.rx_columns({mode: 'ts', fields: meta.fields, _mgr: mgr});
    const tree = buildTree({
      mgr,
      owner,
      meta,
      selected: parent,
    });
    return {tree, scheme, columns};
  }, [mgr]);

  const rows = (tree.findNode(parent) || tree).list;

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
      <Resize handleWidth="6px" handleColor={theme.palette.grey[200]}>
        <ResizeHorizon width={`${(width /3).toFixed()}px`} minWidth="200px">
          <Tree tree={tree} setParent={setParent} />
        </ResizeHorizon>
        <ResizeHorizon width={`${(width * 2/3).toFixed()}px`} minWidth="400px">
          <List
            rows={rows}
            columns={columns}
            onDoubleClick={listDoubleClick}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
          />
        </ResizeHorizon>
      </Resize>
    </Relative>
  </Content>;
}
