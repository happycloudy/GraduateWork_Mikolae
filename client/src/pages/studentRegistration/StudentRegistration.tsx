import React from 'react';
import PageWrap from "../../modules/Helpers/components/PageLayout/PageLayout";
import Registration from "../../modules/Registration/components/Registration/Registration";
import {Row} from "antd";

const StudentRegistration = () => {
    return (
        <PageWrap>
            <Row align={'middle'} justify={'center'} style={{height: '100%'}}>
                <div>
                    <h2>
                        Регистрация нового студента
                    </h2>
                    <Registration/>
                </div>
            </Row>
        </PageWrap>
    );
};

export default StudentRegistration;