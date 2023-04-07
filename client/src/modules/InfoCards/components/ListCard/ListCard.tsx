import React from 'react';
import {Button, Card, List} from "antd";
import {LinkOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

interface IProps {
    title?: string
    items?: any[]
    withLinks: boolean
}

export const ListCard = ({title = '', items = [], withLinks}: IProps) => {
    const navigate = useNavigate()

    const handleNavigate = (id: string) => {
        navigate(`/teacher/lessons/${id}`)
    }

    return (
        <Card title={title} bordered={false} style={{width: 300}}>
            <List
                size="large"
                bordered
                dataSource={items}
                renderItem={(item) => (
                    <List.Item>
                        {item.name}
                        {
                            withLinks &&
                            <Button type={'link'} onClick={() => handleNavigate(item.id)} icon={<LinkOutlined/>}/>
                        }
                    </List.Item>
                )}
            />
        </Card>
    );
};