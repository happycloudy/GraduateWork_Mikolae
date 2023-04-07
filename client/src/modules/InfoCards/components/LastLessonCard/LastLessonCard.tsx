import React from 'react';
import {Button, Card, Row, Typography} from "antd";

export const LastLessonCard = () => {
    return (
        <Card title={'Последний созданный ключ'} bordered={false} style={{width: 300}}>
            <Row justify={"center"}>
                <Typography.Title level={5}>Веб программирование</Typography.Title>
                <Button>
                    rfgeg234rge2
                </Button>
                <Typography.Text type={'secondary'}>нажми на кнопку, чтобы скопировать</Typography.Text>
            </Row>
        </Card>
    );
};