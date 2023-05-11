import React, { useState } from 'react';
import { AutoComplete, Button, Form, Space } from 'antd';
import { IAutocomplete } from '../../interfaces/IAutocomplete';

const groups = [{ value: 'КС-24' }, { value: 'КС-34' }, { value: 'КС-44' }];
const lessons = [{ value: 'Веб программирование' }, { value: 'Операционные сети' }, { value: 'МИИ' }];

const GroupSearch = () => {
  const [groupSuggestions, setGroupSuggestions] = useState<IAutocomplete[]>([]);
  const [lessonSuggestions, setLessonSuggestions] = useState<IAutocomplete[]>([]);


  const handleSearchGroup = (text: string) => setGroupSuggestions(() => {
    const suggestions = groups.map(item => item.value.includes(text) && item).filter(item => item !== false);
    return suggestions as IAutocomplete[];
  });

  const handleSearchLessons = (text: string) => setLessonSuggestions(() => {
    const suggestions = lessons.map(item => item.value.includes(text) && item).filter(item => item !== false);
    return suggestions as IAutocomplete[];
  });

  const handleFinish = (data: any) => {
    console.log(data);
  };

  return (
    <Space size={'large'}>
      <Form onFinish={handleFinish}>
        <Space>
          <Form.Item name={'group'}>
            <AutoComplete style={{ width: 200 }}
                          options={groupSuggestions}
                          placeholder={'Группа'}
                          onSearch={handleSearchGroup}
            />
          </Form.Item>

          <Form.Item name={'lesson'}>
            <AutoComplete style={{ width: 200 }}
                          options={lessonSuggestions}
                          placeholder={'Предмет'}
                          onSearch={handleSearchLessons}
            />
          </Form.Item>

          <Form.Item>
            <Button htmlType={'submit'}>
              Показать
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </Space>
  );
};

export default GroupSearch;