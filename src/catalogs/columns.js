
export const columns = [
  {
    key: 'id',
    name: 'Код',
    renderCell({row}) {
      return row.id;
    },
    //frozen: true,
    //resizable: false,
    width: 100
  },
  {
    key: 'name',
    name: 'Наименование',
    renderCell({row}) {
      return row.name;
    },
  }
];
