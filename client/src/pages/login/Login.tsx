import React from 'react';
import PageLayout from "../../modules/Helpers/components/PageLayout/PageLayout";
import {Login} from "../../modules/Login";
import {Col, Divider, Layout, Row} from "antd";

const LoginPage = () => {
    return (
        <PageLayout>
            <Row align={'middle'} justify={'center'} style={{height: '100%'}}>
                <div>
                    <Row justify={"center"}>
                        <Col>
                            <h2>
                                Вход
                            </h2>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col >
                            <Login/>
                        </Col>
                    </Row>
                </div>
            </Row>
        </PageLayout>
    );
};

export default LoginPage;