import React from 'react';
import {Sidebar} from "../../modules/Sidebar";
import {useUserStore} from "../../stores/user/user.store";
import {LogoutOutlined} from "@ant-design/icons";
import {FloatButton} from "antd";
import {useNavigate} from "react-router-dom";

const TeacherLessons = () => {
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
            <FloatButton type={'primary'} icon={<LogoutOutlined/>} onClick={handleLogout} tooltip={'Выход'}/>
        </>
    );
};

export default TeacherLessons;