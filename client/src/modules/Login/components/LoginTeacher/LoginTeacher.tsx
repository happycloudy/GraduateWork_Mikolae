import React, {useEffect} from 'react';
import {Button, Form, Input, notification, Row} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from "@ant-design/icons";
import {useUserStore} from "../../../../stores/user/user.store";
import {useLoginTeacherMutation} from "../../../../services/users/users.service";
import {useNavigate} from "react-router-dom";

const LoginTeacher = () => {
    const [api, contextHolder] = notification.useNotification();
    const setUser = useUserStore(state => state.setTeacher)
    const mutation = useLoginTeacherMutation()
    const navigate = useNavigate()

    const handleSubmit = (result: any) => mutation.mutate(result)

    const openNotificationWithIcon = (title: string, description: string = '') => api.error({
        message: title,
        description
    });


    useEffect(() => {
        if (mutation.isSuccess) {
            setUser(mutation.data)
            navigate('/teacher',{replace: true})
        }
    }, [mutation.isSuccess])

    useEffect(() => {
        if (mutation.isError) {
            mutation?.error?.response?.json().then(res => {
                switch(res.statusCode) {
                    case(401):
                        openNotificationWithIcon('Неверный логин или пароль')
                        break;
                    default:
                        openNotificationWithIcon(res.message)
                        break;
                }
            }) || openNotificationWithIcon('Ошибка соединения')
        }
    }, [mutation.isError])


    return (
        <Form onFinish={handleSubmit}>
            {contextHolder}
            <Form.Item name={'username'} rules={[{required: true, message: 'Введите логин!'}]}>
                <Input size={'large'} prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Логин"/>
            </Form.Item>

            <Form.Item name={'password'} rules={[{required: true, message: 'Введите пароль!'}]}>
                <Input.Password size={'large'}
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                placeholder="Пароль"
                                iconRender={(visible: any) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                />
            </Form.Item>

            <Form.Item>
                <Row justify={"center"}>
                    <Button htmlType={'submit'}>
                        Войти
                    </Button>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default LoginTeacher;