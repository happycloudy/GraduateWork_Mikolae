import React from 'react';
import { getTableColumns } from '../../helpers/getTableColumns';
import { StyledTable } from './StyledTable';
import { getTableRows } from '../../helpers/getTableRows';

const GroupTable = () => {
  const columns = getTableColumns(['09.01.2023', '15.02.2023']);
  const rows = getTableRows([])
  return (
    <StyledTable columns={columns} dataSource={rows} pagination={false}/>
  );
};

export default GroupTable;