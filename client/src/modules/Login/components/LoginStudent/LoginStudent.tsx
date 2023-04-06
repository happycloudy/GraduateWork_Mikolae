import React, {FormEvent, useEffect} from 'react';
import {Button} from "../../../Button";
import {FormContent} from "../../../Form";
import {useUserStore} from "../../../../stores/user/user.store";
import {FormError} from "../FormError/FormError";
import {Link, useNavigate} from "react-router-dom";
import {useLoginStudentMutation} from "../../../../services/users/users.service";

const LoginStudent = () => {
    const uuid = useUserStore(state => state.uuid)
    const setStudent = useUserStore(state => state.setStudent)
    const mutation = useLoginStudentMutation()
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutation.mutate(uuid)
    }

    useEffect(() => {
        if(mutation.isSuccess) {
            setStudent(mutation.data)
            navigate('/student')
        }
    }, [mutation.isSuccess])

    return (
        <>
            <FormContent onSubmit={handleSubmit}>
                {
                    mutation.isError &&
                    <>
                        <FormError>{mutation.error.name}</FormError>
                        <FormError>{mutation.error.message}</FormError>
                    </>
                }
                <Button type={'submit'}>
                    Войти как студент
                </Button>
                <Link to={'/registration/student'}>
                    Я в первый раз
                </Link>
            </FormContent>

        </>
    );
};

export default LoginStudent;