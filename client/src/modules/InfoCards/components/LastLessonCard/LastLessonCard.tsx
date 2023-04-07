import React, {useState} from 'react';
import {Button, Card, Popover, Row, Typography} from "antd";

export const LastLessonCard = () => {
    const [code] = useState('rfgeg234rge2')
    const handleClick = () => {
        navigator.clipboard.writeText(code)
    }

    return (
        <Card title={'Последний созданный ключ'} bordered={false} style={{width: 300}}>
            <Row justify={"center"}>
                <Typography.Title level={5}>Веб программирование</Typography.Title>
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