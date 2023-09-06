import React from 'react';
import PropTypes from 'prop-types';
import DataGrid from 'react-data-grid';
import {rowKeyGetter, cellClick, cellKeyDown} from '../../../metadata/dataGrid';



export default function List({rows, onDoubleClick, selectedRows, setSelectedRows, columns}) {

  const onCellClick = cellClick({selectedRows, setSelectedRows});
  const onCellKeyDown = cellKeyDown({rows, columns, onDoubleClick, setSelectedRows});

  return <DataGrid
    columns={columns}
    rows={rows}
    rowKeyGetter={rowKeyGetter}
    //onRowsChange={setRows}
    selectedRows={selectedRows}
    onSelectedRowsChange={setSelectedRows}
    onCellClick={onCellClick}
    onCellDoubleClick={onDoubleClick}
    onCellKeyDown={onCellKeyDown}
    className="fill-grid"
    rowHeight={33}
  />;
}
