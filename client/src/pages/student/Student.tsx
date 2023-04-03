import React from 'react';
import CenterWrap from "../../modules/Stats/components/CenterWrap";
import PageWrap from "../../modules/Stats/components/Page";
import UserInfo from "../../modules/Stats/components/UserInfo";
import CheckUserButton from "../../modules/Stats/components/CheckUserButton";

const Student = () => {
    return (
        <PageWrap>
            <CenterWrap direction={'column'} style={{height: '100vh'}}>
                <h2>
                    Определение пользователя:
                </h2>
                <CheckUserButton/>
                <UserInfo/>
            </CenterWrap>
        </PageWrap>
    );
};

export default Student;