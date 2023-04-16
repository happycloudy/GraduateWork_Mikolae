import React, {useEffect} from 'react';
import {useRegisterStudentMutation} from "../../../../services/users/users.service";
import {getCourse} from "../../../../helpers/getCourse";
import {useUserStore} from "../../../../stores/user/user.store";
import {IRegistrationData} from "../../interfaces/RegistrationData.interface";
import {Button, Form, Input, notification, Row, Space} from "antd";
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";

const Registration = () => {
    const [api, contextHolder] = notification.useNotification();
    const uuid = useUserStore(state => state.uuid)
    const mutation = useRegisterStudentMutation()
    const navigate = useNavigate()


    const onSubmit = (result: IRegistrationData) => {
        mutation.mutate({
            ...result,
            course: getCourse(result.group),
            uuid: uuid
        })
    }

    const openNotificationWithIcon = (title: string) => api.error({message: title});


    useEffect(() => {
        if (mutation.isSuccess) {
            navigate('/login')
        }
    }, [mutation.isSuccess])

    useEffect(() => {
        if (mutation.isError) {
            mutation?.error?.response?.json().then(res => {
                openNotificationWithIcon(res.message)
            }) || openNotificationWithIcon('Ошибка соединения')

        }
    }, [mutation.isError])


    return (
        <Space direction={'vertical'}>
            <Form onFinish={onSubmit}>
                {contextHolder}
                <Form.Item name="name" rules={[{required: true, message: 'Введите ФИО!'}]}>
                    <Input size={'large'} prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="ФИО"/>
                </Form.Item>

                <Form.Item name={'group'} rules={[{required: true, message: 'Введите группу!'}]}>
                    <Input size={'large'}
                           prefix={<LockOutlined className="site-form-item-icon"/>}
                           placeholder="Группа"
                    />
                </Form.Item>

                <Form.Item>
                    <Row justify={"center"}>
                        <Button htmlType={'submit'} size={'large'}>
                            Зарегистрироваться
                        </Button>
                    </Row>
                </Form.Item>
            </Form>
        </Space>
    );
};

export default Registration;