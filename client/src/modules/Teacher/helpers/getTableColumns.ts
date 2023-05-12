export const getTableColumns = (dates: string[]) => {
  const datesColumns = dates.map(item => ({
    title: item,
    dataIndex: item,
    key: item,
  }))
  return [
    {
      title: 'ФИО',
      dataIndex: 'name',
      key: 'name',
    },
    ...datesColumns
  ];
}