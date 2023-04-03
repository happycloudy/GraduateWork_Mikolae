import React, {FormEvent, useEffect} from 'react';
import {Button} from "../../../Buttons";
import {FormContent} from "../FormContent/FormContent";
import {useUsersStore} from "../../../../stores/students/students.store";
import {FormError} from "../FormError/FormError";
import {Link, useNavigate} from "react-router-dom";
import {useLoginStudentMutation} from "../../../../services/users/users.service";

const LoginStudent = () => {
    const uuid = useUsersStore(state => state.uuid)
    const mutation = useLoginStudentMutation()
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutation.mutate(uuid)
    }

    useEffect(() => {
        if(mutation.isSuccess) {
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