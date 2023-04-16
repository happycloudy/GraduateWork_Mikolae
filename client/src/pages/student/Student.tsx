import React from 'react';
import {UserInfo} from "../../modules/Student";
import {Col, Divider, FloatButton, Row} from "antd";
import PageLayout from "../../modules/Helpers/components/PageLayout/PageLayout";
import {SubscribeVisit} from "../../modules/Student";
import {LogoutOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {useUserStore} from "../../stores/user/user.store";

const Student = () => {
    const logout = useUserStore(state => state.logout)
    const navigate = useNavigate()


    const handleLogout = () => {
        logout()
        navigate('/')
    }


    return (
        <PageLayout>
            <Row align={'middle'} justify={'center'} style={{height: '100%'}}>
                <Col>
                    <UserInfo/>
                    <Divider/>
                    <SubscribeVisit/>
                </Col>
            </Row>
            <FloatButton type={'primary'} icon={<LogoutOutlined/>} onClick={handleLogout} tooltip={'Выход'}/>
        </PageLayout>
    );
};

export default Student;