import React from 'react';
import PageLayout from "../../modules/Helpers/components/PageLayout/PageLayout";
import {FloatButton} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import {useUserStore} from "../../stores/user/user.store";
import {useNavigate} from "react-router-dom";

const TeacherHome = () => {
    const logout = useUserStore(state => state.logout)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <PageLayout>
            <FloatButton type={'primary'} icon={<LogoutOutlined />} onClick={handleLogout}/>

        </PageLayout>
    );
};

export default TeacherHome;