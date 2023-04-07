import React from 'react';
import {Divider, Layout, Menu} from "antd";
import {menuItems} from "../../constants/menuItems";
import TeacherInfo from "../TeacherInfo/TeacherInfo";
import {useNavigate} from "react-router-dom";


export const Sidebar = () => {
    const navigate = useNavigate()

    return (
        <Layout.Sider theme={'light'}>
            <TeacherInfo/>
            <Divider/>
            <Menu defaultSelectedKeys={['teacher/home']}
                  mode="vertical"
                  theme="light"
                  items={menuItems}
                  onSelect={({key}) => navigate(key)}
            />
        </Layout.Sider>
    );
};