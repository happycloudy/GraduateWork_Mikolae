import React, {useEffect} from 'react';
import {useUserStore} from "../../../../stores/user/user.store";
import {Link, useNavigate} from "react-router-dom";
import {useLoginStudentMutation} from "../../../../services/users/users.service";
import {Button, Form, notification, Row} from "antd";

const LoginStudent = () => {
    const uuid = useUserStore(state => state.uuid)
    const setStudent = useUserStore(state => state.setStudent)
    const [api, contextHolder] = notification.useNotification();
    const mutation = useLoginStudentMutation()
    const navigate = useNavigate()


    const handleSubmit = () => mutation.mutate(uuid)

    const openNotificationWithIcon = (title: string, description: string = '') => api.error({
        message: title,
        description
    });


    useEffect(() => {
        if (mutation.isSuccess) {
            setStudent(mutation.data)
            navigate('/student')
        }
    }, [mutation.isSuccess])

    useEffect(() => {
        if (mutation.isError) {
            mutation?.error?.response?.json().then(res => {
                switch (res.statusCode) {
                    case(401):
                        openNotificationWithIcon('Похоже, вы на этом устройстве заходите в первый раз, зарегистрируйтесь')
                        break;
                    default:

                        break;
                }
            }) || openNotificationWithIcon('Ошибка соединения')
        }
    }, [mutation.isError])

    return (
        <Form onFinish={handleSubmit}>
            {contextHolder}
            <Form.Item>
                <Row justify={"center"}>
                    <Button htmlType={'submit'} size={'middle'}>
                        Войти как студент
                    </Button>
                </Row>
                <Row justify={"center"}>
                    <Link to={'/registration/student'}>
                        Я в первый раз
                    </Link>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default LoginStudent;