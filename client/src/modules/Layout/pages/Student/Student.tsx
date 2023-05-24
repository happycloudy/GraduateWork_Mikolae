import React from 'react';
import { StudentInfo, SubscribeVisit } from '../../../Student';
import { Col, Divider, FloatButton, Row } from 'antd';
import { Layout } from '../../components/Layout/Layout';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../../stores/user/user.store';

export const Student = () => {
  const logout = useUserStore(state => state.logout);
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate('/');
  };


  return (
    <Layout style={{height: '100vh'}}>
      <Row align={'middle'} justify={'center'} style={{ height: '100%' }}>
        <Col>
          <StudentInfo />
          <Divider />
          <SubscribeVisit />
        </Col>
      </Row>
      <FloatButton type={'primary'} icon={<LogoutOutlined />} onClick={handleLogout} tooltip={'Выход'} />
    </Layout>
  );
};