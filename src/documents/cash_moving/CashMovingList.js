import React from 'react';
import List from '@oknosoft/ui/dist/DataList/List';
import Toolbar from '@oknosoft/ui/dist/DataList/Toolbar';
import {Content, Relative} from '@oknosoft/ui/dist/App/styled';

const sort = $p.utils.sort('name');

export default function FlatList(props) {
  let {mgr, meta, owner} = props;
  const [selectedRows, setSelectedRows] = React.useState(new Set());
  const {rows, columns} = React.useMemo(() => {
    const columns = [
      {
        key: 'date',
        name: 'Дата',
        renderCell({row}) {
          return row.date;
        },
        width: 100,
      },
      {
        key: 'number_doc',
        name: 'Номер',
        renderCell({row}) {
          return row.number_doc;
        },
        width: 100
      },
      {
        key: 'sender',
        name: 'Отправитель',
        renderCell({row}) {
          return row.sender;
        },
        width: 200
      },
      {
        key: 'recipient',
        name: 'Получатель',
        renderCell({row}) {
          return row.recipient;
        },
        width: 200
      },
      {
        key: 'doc_amount',
        name: 'Сумма',
        renderCell({row}) {
          return row.doc_amount.toFixed(0);
        },
        width: 100
      },
      {
        key: 'note',
        name: 'Комментарий',
        renderCell({row}) {
          return row.note;
        }
      },
    ];
    const rows = [];
    for(const o of mgr) {
      if(!o.empty()) {
        rows.push(o);
      }
    }
    rows.sort(sort);
    return {rows, columns};
  }, [mgr]);

  const getCurrent = () => selectedRows.size ? mgr.get(Array.from(selectedRows)[0]) : null;

  const handleSelect = () => {
    const current = getCurrent();
    current && props?.handleSelect?.(current);
  };

  const listDoubleClick = () => {
    const current = getCurrent();
    if(current) {
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
