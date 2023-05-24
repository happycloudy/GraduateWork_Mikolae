import React, { useEffect, useState } from 'react';
import { AutoComplete, Button, Form, Space } from 'antd';
import { IAutocomplete } from '../../interfaces/IAutocomplete';
import { IFetchTableRequest } from '../../../../services/visits/interfaces/IFetchTableRequest';
import { useAutocompleteGroup } from '../../../../services/groups/groups.service';
import { useAutocompleteLesson } from '../../../../services/lessons/lessons.service';
import { uniqueLessons } from '../../helpers/uniqueLessons';

interface IProps {
  fetch: (data: IFetchTableRequest) => void;
}

const GroupSearch = ({ fetch }: IProps) => {
  const [groups, setGroups] = useState<IAutocomplete[]>([]);
  const [lessons, setLessons] = useState<IAutocomplete[]>([]);
  const groupsMutation = useAutocompleteGroup();
  const lessonsMutation = useAutocompleteLesson();

  const handleSearchGroup = (text: string) => groupsMutation.mutate(text);
  const handleSearchLessons = (text: string) => lessonsMutation.mutate(text);

  const handleFinish = (data: IFetchTableRequest) => fetch(data);

  useEffect(() => {
    if (groupsMutation.isSuccess) {
      setGroups(groupsMutation.data.groups.map(group => ({
        value: group,
      })));
    }
  }, [groupsMutation.isSuccess]);

  useEffect(() => {
    if (lessonsMutation.isSuccess) {
      const filteredLessons = uniqueLessons(lessonsMutation.data
        .map(lesson => ({
          value: lesson.name,
        })))
      setLessons(filteredLessons);
    }
  }, [lessonsMutation.isSuccess]);

  return (
    <Space size={'large'}>
      <Form onFinish={handleFinish}>
        <Space>
          <Form.Item name={'group'}>
            <AutoComplete style={{ width: 200 }}
                          options={groups}
                          placeholder={'Группа'}
                          onSearch={handleSearchGroup}
            />
          </Form.Item>

          <Form.Item name={'lesson'}>
            <AutoComplete style={{ width: 200 }}
                          options={lessons}
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