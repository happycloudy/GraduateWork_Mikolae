import React, {useEffect, useState} from 'react';
import {AutoComplete, Button, Form, Input, Space, Typography} from "antd";
import {ICreateVisit} from "../../interfaces/createVisit.interface";
import {useCreateVisitMutation} from "../../../../services/visits/visits.service";
import {useAutocompleteLesson} from "../../../../services/lessons/lessons.service";


export const CreateVisitForm = () => {
    const [lessonsOptions, setLessonsOptions] = useState<string[]>([])
    const autocomplete = useAutocompleteLesson()
    const createVisit = useCreateVisitMutation()


    const handleFinish = (result: ICreateVisit) => {
        console.log(result)
        createVisit.mutate({
            ...result,
            teacherId: '',
        })
    }

    const handleSearch = (text: string) => {
        autocomplete.mutate(text)
    }

    useEffect(() => {
        if (autocomplete.isSuccess) {
            setLessonsOptions(autocomplete.data.lessons)
        }
    }, [autocomplete.isSuccess])

    return (
        <Form onFinish={handleFinish}>
            <Space direction={'vertical'} align={'center'}>
                <Typography.Title level={3}>
                    Создать занятие
                </Typography.Title>
                <Form.Item name={'key'}>
                    <Input placeholder={'Ключ'} style={{width: 200}}/>
                </Form.Item>
                <Form.Item name={'lessonId'}>
                    <AutoComplete
                        style={{width: 200}}
                        options={lessonsOptions.map(lesson => ({label: lesson, value: lesson}))}
                        onSearch={handleSearch}
                        placeholder="input here"
                    />
                </Form.Item>
                <Form.Item>
                    <Button htmlType={'submit'}>
                        Создать
                    </Button>
                </Form.Item>
            </Space>
        </Form>
    );
};