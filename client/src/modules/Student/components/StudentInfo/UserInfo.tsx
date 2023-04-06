import React, {useMemo} from 'react';
import {useUserStore} from "../../../../stores/user/user.store";
import {List, Typography} from "antd";

export const UserInfo = () => {
    const name = useUserStore(state => state.name)
    const group = useUserStore(state => state.group)
    const uuid = useUserStore(state => state.uuid)

    const listData = useMemo(() => ({name, group, uuid}),[name, group, uuid])

    return (
            <List
                header={<Typography.Title level={3}>Информация о студенте</Typography.Title>}
                bordered
                dataSource={Object.keys(listData)}
                renderItem={(item) => <List.Item>{listData[item as keyof typeof listData]}</List.Item>}
            />
    );
};