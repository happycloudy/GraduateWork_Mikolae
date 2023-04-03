import React from 'react';
import CenterWrap from "../../modules/Stats/components/CenterWrap";
import PageWrap from "../../modules/Stats/components/Page";
import Registration from "../../modules/Registration/components/Registration/Registration";

const StudentRegistration = () => {
    return (
        <PageWrap>
            <CenterWrap direction={'column'} style={{height: '100vh'}}>
                <h2>
                    Регистрация нового студента
                </h2>
                <Registration/>
            </CenterWrap>
        </PageWrap>
    );
};

export default StudentRegistration;