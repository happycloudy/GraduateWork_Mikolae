import React from 'react';
import {Row, Space, Typography} from "antd";
import {useUserStore} from "../../../../stores/user/user.store";

const TeacherInfo = () => {
    const name = useUserStore(state => state.name)
    return (
        <Space size={'small'} direction={'vertical'} style={{width: '100%'}}>
            <Typography.Title level={2} style={{textAlign: 'center'}}>
                {name}
            </Typography.Title>
            {/*<Row justify={"center"}>*/}
            {/*    <Typography.Text>*/}
            {/*        Всего дисциплин 10*/}
            {/*    </Typography.Text>*/}
            {/*</Row>*/}
        </Space>
    );
};

export default TeacherInfo;