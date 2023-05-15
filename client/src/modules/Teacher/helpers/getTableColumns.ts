export const getTableColumns = (dates: string[]) => {
  return [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    ...dates.map(item => ({
      title: item,
      dataIndex: item,
      key: item,
    }))
  ]
}