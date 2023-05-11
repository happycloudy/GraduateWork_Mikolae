import React from 'react';
import { Row, Space } from 'antd';
import { LoginForm } from '../../../Auth';
import { Layout } from '../../components/Layout/Layout';

export const Login = () => {
  return (
    <Layout>
      <Row align={'middle'} justify={'center'} style={{ height: '100%' }}>
        <Space direction={'vertical'} size={'large'}>
          <Row justify={'center'}>
            <h2>
              Вход
            </h2>
          </Row>
          <Row justify={'center'}>
            <LoginForm />
          </Row>
        </Space>
      </Row>
    </Layout>
  );
};