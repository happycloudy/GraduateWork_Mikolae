import React from 'react';
import PageWrap from "../../modules/Helpers/components/PageLayout/PageLayout";
import Registration from "../../modules/Registration/components/Registration/Registration";
import {Button, Row, Space} from "antd";
import {LeftOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const StudentRegistration = () => {
    const navigate = useNavigate()

    const handlePrevPage = () => navigate('/login', {replace: true})

    return (
        <PageWrap>
            <Row align={'middle'} justify={'center'} style={{height: '100%'}}>
                <Space direction={'vertical'} size={'large'}>
                    <Row justify={"center"}>
                        <Button icon={<LeftOutlined/>} type={"link"} onClick={handlePrevPage}/>
                        <h2>
                            Регистрация нового студента
                        </h2>
                    </Row>
                    <Row justify={"center"}>
                        <Registration/>
                    </Row>
                </Space>
            </Row>
        </PageWrap>
    );
};

export default StudentRegistration;