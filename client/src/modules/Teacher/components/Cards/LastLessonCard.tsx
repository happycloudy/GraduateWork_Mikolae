import React from 'react';
import {Button, Card, Popover, Row, Typography} from "antd";
import {useUserStore} from "../../../../stores/user/user.store";

export const LastLessonCard = () => {
    const code = useUserStore(state => state.visits.length ?
        state.visits.at(-1)!.key :
        'Ключа нету'
    )
    const name = useUserStore(state => state.visits.length ?
      state.visits.at(-1)!.lesson.name :
      'Нет занятия'
    )

    const handleClick = () => {
        navigator.clipboard.writeText(code)
    }

    return (
        <Card title={'Последний созданный ключ'} bordered={false} style={{width: 300}}>
            <Row justify={"center"}>
                <Typography.Title level={5}>{name}</Typography.Title>
                <Popover trigger={'click'} title={'Скопировано'}>
                    <Button onClick={handleClick}>
                        {code}
                    </Button>
                </Popover>
                <Typography.Text type={'secondary'}>нажми на кнопку, чтобы скопировать</Typography.Text>
            </Row>
        </Card>
    );
};