import React, {useEffect, useState} from 'react';
import {AutoComplete, Button, DatePicker, Form, Input, notification, Typography} from "antd";
import {ICreateVisit} from "../../interfaces/createVisit.interface";
import {useCreateVisitMutation} from "../../../../services/visits/visits.service";
import {useAutocompleteLesson} from "../../../../services/lessons/lessons.service";
import {
    IAutocompleteLessonResponse
} from "../../../../services/lessons/interfaces/IAutocompleteLessonResponse";
import {useUserStore} from "../../../../stores/user/user.store";

const now = Date.now().toString()
const initialKey = new Date().toLocaleDateString().replaceAll('.', '')
    + '_' + now.slice(now.length - 5, now.length)

export const CreateVisitForm = () => {
    const [lessonsOptions, setLessonsOptions] = useState<IAutocompleteLessonResponse[]>([])
    const autocomplete = useAutocompleteLesson()
    const createVisit = useCreateVisitMutation()
    const teacherId = useUserStore(state => state.id)
    const [api, contextHolder] = notification.useNotification();

    const handleFinish = (result: ICreateVisit) => {
        const lessonId = lessonsOptions.find(
            item =>
                item.name === result.lessonId.split('|')[0] &&
                item.group === result.lessonId.split('|')[1]
        )!.id

        const date = +result.date.$d

        createVisit.mutate({
            key: result.key,
            teacherId: teacherId,
            lessonId: lessonId,
            date: date | Date.now()
        })
    }

    const openNotificationWithIcon = (title: string) => api.success({message: title});

    const handleSearch = (text: string) => {
        autocomplete.mutate(text)
    }

    useEffect(() => {
        if (autocomplete.isSuccess) {
            setLessonsOptions(autocomplete.data)
        }
    }, [autocomplete.isSuccess])

    useEffect(() => {
        if(createVisit.isSuccess) {
            openNotificationWithIcon('Занятие создано!')
        }
    }, [createVisit.isSuccess])

    return (
        <Form layout={'vertical'} onFinish={handleFinish} initialValues={{key: initialKey}}>
            {contextHolder}
            <Typography.Title level={3}>
                Создать занятие
            </Typography.Title>
            <Form.Item label={'Ключ'} name={'key'} rules={[{required: true, message: 'Введите ключ'}]}>
                <Input placeholder={'Ключ'} style={{width: 300}}/>
            </Form.Item>
            <Form.Item label={'Предмет'} name={'lessonId'} rules={[{required: true, message: 'Выберите предмет'}]}>
                <AutoComplete
                    style={{width: 300}}
                    options={lessonsOptions.map(lesson => ({
                        label: `${lesson.name} | ${lesson.group}`,
                        value: `${lesson.name}|${lesson.group}`
                    }))}
                    onSearch={handleSearch}
                    placeholder="Предмет"
                />
            </Form.Item>
            <Form.Item label={'Дата'} name={'date'} rules={[{required: true, message: 'Выберите дату '}]}>
                <DatePicker style={{width: 300}}/>
            </Form.Item>
            <Form.Item>
                <Button htmlType={'submit'}>
                    Создать
                </Button>
            </Form.Item>
        </Form>
    );
};