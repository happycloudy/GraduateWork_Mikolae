import React from 'react';
import PageLayout from "../../modules/Helpers/components/PageLayout/PageLayout";
import {Col, FloatButton, Row} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import {useUserStore} from "../../stores/user/user.store";
import {useNavigate} from "react-router-dom";
import {Sidebar} from "../../modules/Sidebar";
import {Container} from "../../modules/Helpers/components/Container/Container";
import {LastLessonCard, ListCard} from "../../modules/InfoCards";

const TeacherHome = () => {
    const logout = useUserStore(state => state.logout)
    const isAuth = useUserStore(state => state.isAuth)
    const lessons = useUserStore(state => state.lessons)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <>
            {isAuth && <Sidebar/>}
            <PageLayout>
                <FloatButton type={'primary'} icon={<LogoutOutlined/>} onClick={handleLogout} tooltip={'Выход'}/>
                <Container>
                    <Row>
                        <Col>
                            <ListCard title={'Мои предметы'} items={lessons} withLinks/>
                        </Col>
                        <Col offset={3}>
                            <LastLessonCard/>
                        </Col>
                    </Row>
                </Container>
            </PageLayout>
        </>
    );
};

export default TeacherHome;