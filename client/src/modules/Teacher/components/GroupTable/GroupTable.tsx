import React from 'react';
import { getTableColumns } from '../../helpers/getTableColumns';
import { StyledTable } from './StyledTable';
import { getTableRows } from '../../helpers/getTableRows';
import { IGroupTableData } from '../../interfaces/IGroupTableData';

const GroupTable = ({ rows = [], columns = [], loading = false }: Partial<IGroupTableData>) => {
  const columnsData = getTableColumns(columns);
  const rowsData = getTableRows(rows, columns);
  return (
    <StyledTable columns={columnsData}
                 dataSource={rowsData}
                 rowKey={'id'}
                 loading={loading}
                 pagination={false} />
  );
};

export default GroupTable;