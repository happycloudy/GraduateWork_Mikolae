import React, {useCallback, useState} from 'react';
import {Roles} from "../../enums/loginType.enum";
import LoginStudent from "../LoginStudent/LoginStudent";
import LoginTeacher from "../LoginTeacher/LoginTeacher";
import {Radio, RadioChangeEvent, Space} from "antd";

export const Login = () => {
    const [type, setType] = useState<Roles>(Roles.Student)


    const loginForm = useCallback(() => {
        switch (type) {
            case Roles.Student:
                return <LoginStudent/>
            case Roles.Teacher:
                return <LoginTeacher/>
        }
    }, [type])


    const handleType = (event: RadioChangeEvent) => setType(event.target.value)

    return (
        <Space direction={'vertical'} size={'small'}>
            <Radio.Group value={type} onChange={handleType}>
                <Radio.Button value={Roles.Student}>Я студент</Radio.Button>
                <Radio.Button value={Roles.Teacher}>Я преподаватель</Radio.Button>
            </Radio.Group>
            {loginForm()}
        </Space>
    );
};