import React from 'react';
import {UserInfo} from "../../modules/Student";
import {Col, Divider, Row} from "antd";
import PageLayout from "../../modules/Helpers/components/PageLayout/PageLayout";
import {SubscribeVisit} from "../../modules/Student";

const Student = () => {
    return (
        <PageLayout>
            <Row align={'middle'} justify={'center'} style={{height: '100%'}}>
                <Col>
                    <UserInfo/>
                    <Divider/>
                    <SubscribeVisit/>
                </Col>
            </Row>
        </PageLayout>
    );
};

export default Student;