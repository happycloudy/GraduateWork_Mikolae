import React from 'react';
import {UserInfo} from "../../modules/Student";
import {Divider, Row} from "antd";
import PageLayout from "../../modules/Helpers/components/PageLayout/PageLayout";

const Student = () => {
    return (
        <PageLayout>
            <Row align={'middle'} justify={'center'} style={{height: '100%'}}>
                <UserInfo/>
                <Divider/>
            </Row>
        </PageLayout>
    );
};

export default Student;