import React from 'react';
import {Divider, Layout, Menu} from "antd";
import {menuItems} from "../../constants/menuItems";
import TeacherInfo from "../TeacherInfo/TeacherInfo";


export const Sidebar = () => {
    return (
        <Layout.Sider theme={'light'}>
            <TeacherInfo/>
            <Divider/>
            <Menu defaultSelectedKeys={['1']}
                  mode="vertical"
                  theme="light"
                  items={menuItems}
            />
        </Layout.Sider>
    );
};