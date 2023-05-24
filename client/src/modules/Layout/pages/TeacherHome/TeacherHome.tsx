import React, { useEffect } from 'react';
import { Col, FloatButton, Row, Space } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useUserStore } from '../../../../stores/user/user.store';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { useQuery } from 'react-query';
import { visitsService } from '../../../../services/visits/visits.service';
import { Layout } from '../../components/Layout/Layout';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { GroupTableSection, ListCard } from '../../../Teacher';
import { LastLessonCard } from '../../../Teacher';

export const TeacherHome = () => {
  const isAuth = useUserStore(state => state.isAuth);
  const lessons = useUserStore(state => state.lessons);
  const initVisits = useUserStore(state => state.initVisits);
  const logout = useUserStore(state => state.logout);
  const { data, isSuccess, isFetching } = useQuery('get-visits-data', visitsService.fetchVisits);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    if (isSuccess && !isFetching) {
      initVisits(data || []);
    }
  }, [isSuccess, isFetching]);

  return (
    <>
      {isAuth && <Sidebar />}
      <Layout>
        <FloatButton type={'primary'} icon={<LogoutOutlined />} onClick={handleLogout} tooltip={'Выход'} />
        <Container>
          <Space size={'large'} direction={'vertical'} style={{ width: '100%' }}>
            <Row style={{ width: '100%' }}>
              {/*<Col>*/}
              {/*  <ListCard title={'Мои предметы'}*/}
              {/*            items={lessons.map(item => ({*/}
              {/*              name: item.name,*/}
              {/*              id: item.id,*/}
              {/*            }))}*/}
              {/*            withLinks />*/}
              {/*</Col>*/}
              <Col>
                <ListCard title={'Мои занятия (последние 10)'}
                          items={data?.map(item => ({
                            name: item.lesson?.name ||
                              'Неизвестный предмет' + ' ' +
                              (new Date(item.date)).toLocaleDateString(),
                            id: item.id,
                            copyContent: item.key,
                          })) || []}
                          withCopyContent />
              </Col>
              <Col offset={1}>
                <LastLessonCard />
              </Col>
            </Row>
            <Row>
              <GroupTableSection />
            </Row>
          </Space>
        </Container>
      </Layout>
    </>
  );
};