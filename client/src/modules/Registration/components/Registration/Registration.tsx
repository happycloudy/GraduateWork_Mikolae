import React, {useEffect, useState} from 'react';
import {useRegisterStudentMutation} from "../../../../services/users/users.service";
import {getCourse} from "../../../../helpers/getCourse";
import {useUserStore} from "../../../../stores/user/user.store";
import {IRegistrationData} from "../../interfaces/RegistrationData.interface";
import {AutoComplete, Button, Form, Input, notification, Row, Space} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import {useAutocompleteGroup} from "../../../../services/groups/groups.service";

export const Registration = () => {
    const [groupsOptions, setGroupsOptions] = useState<string[]>([])
    const uuid = useUserStore(state => state.uuid)
    const [api, contextHolder] = notification.useNotification();
    const autocomplete = useAutocompleteGroup()
    const register = useRegisterStudentMutation()
    const navigate = useNavigate()


    const onSubmit = (result: IRegistrationData) => {
        register.mutate({
            ...result,
            course: getCourse(result.group),
            uuid: uuid
        })
    }

    const openNotificationWithIcon = (title: string) => api.error({message: title});

    const handleSearch = (text: string) => {
        autocomplete.mutate(text)
    }


    useEffect(() => {
        if (register.isSuccess) {
            navigate('/login')
        }
    }, [register.isSuccess])

    useEffect(() => {
        if (register.isError) {
            register?.error?.response?.json().then(res => {
                openNotificationWithIcon(res.message)
            }) || openNotificationWithIcon('Ошибка соединения')

        }
    }, [register.isError])

    useEffect(() => {
        if (autocomplete.isSuccess) {
            setGroupsOptions(autocomplete.data.groups)
        }
    }, [autocomplete.isSuccess])

    return (
        <Space direction={'vertical'}>
            <Form onFinish={onSubmit}>
                {contextHolder}
                <Form.Item name="name" rules={[{required: true, message: 'Введите ФИО!'}]}>
                    <Input style={{width: 300}}
                           size={'large'}
                           prefix={<UserOutlined className="site-form-item-icon"/>}
                           placeholder="ФИО"/>
                </Form.Item>

                <Form.Item name={'group'} rules={[
                    {required: true, message: 'Введите группу!'},
                    () => ({
                        validator(_, value) {
                            if(groupsOptions.includes(value)) {
                                return Promise.resolve()
                            } else {
                                return Promise.reject(new Error('Выберите группу из списка'));
                            }
                        },
                    }),
                ]}>
                    <AutoComplete
                        style={{width: 300}}
                        options={groupsOptions.map(lesson => ({
                            label: lesson,
                            value: lesson
                        }))}
                        onSearch={handleSearch}
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