import React from 'react';
import PageLayout from "../../modules/Helpers/components/PageLayout/PageLayout";
import {FloatButton} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import {useUserStore} from "../../stores/user/user.store";
import {useNavigate} from "react-router-dom";
import {Sidebar} from "../../modules/Sidebar";

const TeacherHome = () => {
    const logout = useUserStore(state => state.logout)
    const isAuth = useUserStore(state => state.isAuth)
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

            </PageLayout>
        </>
    );
};

export default TeacherHome;