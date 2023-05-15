import React, { useEffect, useState } from 'react';
import { Space } from 'antd';
import GroupSearch from '../GroupSearch/GroupSearch';
import GroupTable from '../GroupTable/GroupTable';
import { useFetchTable } from '../../../../services/visits/visits.service';

export const GroupTableSection = () => {
  const mutation = useFetchTable()

  return (
    <Space direction={'vertical'} size={'large'}>
      <GroupSearch fetch={mutation.mutate}/>
      <GroupTable columns={mutation.data?.columns} rows={mutation.data?.rows} loading={mutation.isLoading}/>
    </Space>
  );
};