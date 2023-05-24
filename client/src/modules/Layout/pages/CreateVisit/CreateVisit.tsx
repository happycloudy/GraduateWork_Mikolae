import React from 'react';
import { useUserStore } from '../../../../stores/user/user.store';
import { LogoutOutlined } from '@ant-design/icons';
import { FloatButton, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { CreateVisitForm } from '../../../Forms';

export const CreateVisit = () => {
  const logout = useUserStore(state => state.logout);
  const isAuth = useUserStore(state => state.isAuth);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {isAuth && <Sidebar />}
      <FloatButton type={'primary'} icon={<LogoutOutlined />} onClick={handleLogout} tooltip={'Выход'} />
      <Row justify={'center'} align={'middle'} style={{width: '100%'}}>
        <CreateVisitForm/>
      </Row>
    </>
  );
};