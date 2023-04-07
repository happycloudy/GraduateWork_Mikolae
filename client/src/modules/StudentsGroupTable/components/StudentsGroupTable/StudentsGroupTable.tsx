import React from 'react';
import {Space} from "antd";
import Search from "../Search/Search";
import GroupTable from "../GroupTable/GroupTable";

export const StudentsGroupTable = () => {
    return (
        <Space direction={'vertical'} size={'large'}>
            <Search/>
            <GroupTable/>
        </Space>
    );
};