import React, {useEffect} from 'react';
import {Button, Form, Input, notification, Space, Typography} from "antd";
import {useSubscribeVisitMutation} from "../../../../services/users/users.service";
import {useUserStore} from "../../../../stores/user/user.store";
import { useParams } from 'react-router-dom';

export const SubscribeVisit = () => {
    const id = useUserStore(state => state.id)
    const uuid = useUserStore(state => state.uuid)
    const [api, contextHolder] = notification.useNotification();
    const mutation = useSubscribeVisitMutation()
    const params = useParams()

    const handleFinish = (result: any) => {
        mutation.mutate({
            ...result,
            id: id,
            uuid: uuid,
        })
    }

    const openNotificationWithIconError = (title: string) => api.error({message: title});

    const openNotificationWithIconSuccess = (title: string) => api.success({message: title});

    useEffect(() => {
        if(mutation.isSuccess) {
            openNotificationWithIconSuccess('Вы успешно записались на занятие!')
        }
    }, [mutation.isSuccess])

    useEffect(() => {
        if (mutation.isError) {
            mutation?.error?.response?.json().then(res => {
                openNotificationWithIconError(res.message)
            }) || openNotificationWithIconError('Ошибка соединения')

        }
    }, [mutation.isError])


    return (
        <Form onFinish={handleFinish}>
            {contextHolder}
            <Space direction={'vertical'} align={'center'} size={'small'} style={{width:'100%'}}>
                <Typography.Title level={3}>Записаться на занятие</Typography.Title>
                <Form.Item initialValue={params.key} name={'key'}>
                    <Input placeholder={'Код занятия (взять у преподавателя)'}/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={'submit'}>
                        Записаться
                    </Button>
                </Form.Item>
            </Space>
        </Form>
    );
};