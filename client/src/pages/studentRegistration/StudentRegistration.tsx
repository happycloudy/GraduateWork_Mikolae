import React from 'react';
import PageWrap from "../../modules/Helpers/components/PageLayout/PageLayout";
import Registration from "../../modules/Registration/components/Registration/Registration";
import {Row, Space} from "antd";

const StudentRegistration = () => {
    return (
        <PageWrap>
            <Row align={'middle'} justify={'center'} style={{height: '100%'}}>
                <Space direction={'vertical'} size={'large'}>
                    <Row justify={"center"}>
                        <h2>
                            Регистрация нового студента
                        </h2>
                    </Row>
                    <Row justify={"center"}>
                        <Registration/>
                    </Row>
                </Space>
            </Row>
        </PageWrap>
    );
};

export default StudentRegistration;