import React from 'react';
import PageLayout from "../../modules/Helpers/components/PageLayout/PageLayout";
import {Login} from "../../modules/Login";
import {Row, Space} from "antd";

const LoginPage = () => {
    return (
        <PageLayout>
            <Row align={'middle'} justify={'center'} style={{height: '100%'}}>
                <Space direction={'vertical'} size={"large"}>
                    <Row justify={"center"}>
                        <h2>
                            Вход
                        </h2>
                    </Row>
                    <Row justify={"center"}>
                        <Login/>
                    </Row>
                </Space>
            </Row>
        </PageLayout>
    );
};

export default LoginPage;