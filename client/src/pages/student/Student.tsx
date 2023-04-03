import React from 'react';
import CenterWrap from "../../components/simple/CenterWrap";
import PageWrap from "../../components/simple/Page";
import UserInfo from "../../components/smart/UserInfo";
import CheckUserButton from "../../components/smart/CheckUserButton";

const Student = () => {
    return (
        <PageWrap>
            <CenterWrap direction={'column'} style={{height: '100vh'}}>
                <h3>
                    Определение пользователя:
                </h3>
                <CheckUserButton/>
                <UserInfo/>
            </CenterWrap>
        </PageWrap>
    );
};

export default Student;