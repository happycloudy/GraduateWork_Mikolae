export const getTableColumns = (dates: string[]) => {
  return [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    ...dates.map((item, ind) => ({
      title: ind === 0 ? item : new Date(item).toLocaleDateString(),
      dataIndex: item,
      key: item,
    })),
  ];
};