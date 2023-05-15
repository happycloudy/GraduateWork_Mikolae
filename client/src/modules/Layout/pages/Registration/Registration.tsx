import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import {Button, Row, Space} from "antd";
import {LeftOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import { RegistrationForm } from '../../../Auth';

export const Registration = () => {
    const navigate = useNavigate()

    const handlePrevPage = () => navigate('/login', {replace: true})

    return (
        <Layout style={{height: '100vh'}}>
            <Row align={'middle'} justify={'center'} style={{height: '100%'}}>
                <Space direction={'vertical'} size={'large'}>
                    <Row justify={"center"}>
                        <Button icon={<LeftOutlined/>} type={"link"} onClick={handlePrevPage}/>
                        <h2>
                            Регистрация нового студента
                        </h2>
                    </Row>
                    <Row justify={"center"}>
                        <RegistrationForm/>
                    </Row>
                </Space>
            </Row>
        </Layout>
    );
};