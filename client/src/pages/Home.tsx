import React from 'react';
import CenterWrap from "../components/simple/CenterWrap";
import PageWrap from "../components/simple/PageWrap";
import UserInfo from "../components/smart/UserInfo";
import CheckUserButton from "../components/smart/CheckUserButton";

const Home = () => {
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

export default Home;