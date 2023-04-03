import React from 'react';
import PageWrap from "../../modules/Stats/components/Page";
import CenterWrap from "../../modules/Stats/components/CenterWrap";
import {Login} from "../../modules/Login";

const LoginPage = () => {
    return (
        <PageWrap>
            <CenterWrap direction={'column'} style={{height: '100vh'}}>
                <h2>
                    Вход
                </h2>
                <Login/>
            </CenterWrap>
        </PageWrap>
    );
};

export default LoginPage;