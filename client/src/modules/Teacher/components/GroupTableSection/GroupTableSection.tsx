import React from 'react';
import {Space} from "antd";
import GroupSearch from "../GroupSearch/GroupSearch";
import GroupTable from "../GroupTable/GroupTable";

export const GroupTableSection = () => {
    return (
        <Space direction={'vertical'} size={'large'}>
            <GroupSearch/>
            <GroupTable/>
        </Space>
    );
};