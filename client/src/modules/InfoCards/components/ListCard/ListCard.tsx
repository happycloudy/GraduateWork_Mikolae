import React from 'react';
import {Button, Card, List} from "antd";
import {LinkOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

interface IItem {
    name: string
    id: string
    copyContent?: string
    props?: any
}

interface IProps {
    title?: string
    items?: IItem[]
    withLinks?: boolean
    withCopyContent?: boolean
}

export const ListCard = ({title = '', items = [], withLinks, withCopyContent}: IProps) => {
    const navigate = useNavigate()

    const handleNavigate = (id: string) => {
        navigate(`/teacher/lessons/${id}`)
    }

    const handleCopy = (content: string | undefined) => {
        if (content) {
            navigator.clipboard.writeText(content)
        }
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
                        {
                            withCopyContent &&
                            <Button type={'link'} onClick={() => handleCopy(item.copyContent)} icon={<LinkOutlined/>}/>
                        }
                    </List.Item>
                )}
            />
        </Card>
    );
};