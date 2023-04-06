import React, {useEffect} from 'react';
import {useUserStore} from "../../../../stores/user/user.store";
import {Link, useNavigate} from "react-router-dom";
import {useLoginStudentMutation} from "../../../../services/users/users.service";
import {Button, Form, Row} from "antd";

const LoginStudent = () => {
    const uuid = useUserStore(state => state.uuid)
    const setStudent = useUserStore(state => state.setStudent)
    const mutation = useLoginStudentMutation()
    const navigate = useNavigate()

    const handleSubmit = () => mutation.mutate(uuid)

    useEffect(() => {
        if (mutation.isSuccess) {
            setStudent(mutation.data)
            navigate('/student')
        }
    }, [mutation.isSuccess])

    return (
        <Form onFinish={handleSubmit}>
            <Form.Item>
                <Row justify={"center"}>
                    <Button htmlType={'submit'} size={'middle'}>
                        Войти как студент
                    </Button>
                </Row>
                <Row justify={"center"}>
                    <Link to={'/registration/student'}>
                        Я в первый раз
                    </Link>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default LoginStudent;