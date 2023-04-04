import React, {useEffect, useState} from 'react';
import {FormContainer, FormContent} from "../../../Form";
import {Input, InputGroup} from "../../../Input";
import {InputName} from "../../../Input";
import {useForm} from "react-hook-form";
import {Button} from "../../../Button";
import {useRegisterStudentMutation} from "../../../../services/users/users.service";
import {getCourse} from "../../../../helpers/getCourse";
import {useUsersStore} from "../../../../stores/students/students.store";
import {IRegistrationData} from "../../interfaces/RegistrationData.interface";
import {FormError} from "../../../Login/components/FormError/FormError";

const Registration = () => {
    const [error, setError] = useState<string>('')
    const {register, handleSubmit} = useForm<IRegistrationData>()
    const uuid = useUsersStore(state => state.uuid)
    const setAccessToken = useUsersStore(state => state.setAccessToken)
    const mutation = useRegisterStudentMutation()


    const onSubmit = (result: IRegistrationData) => {
        mutation.mutate({
            ...result,
            course: getCourse(result.group),
            uuid: uuid
        })
    }


    useEffect(() => {
        if(mutation.isSuccess) {
            setAccessToken(mutation.data.access_token)
        }
    }, [mutation.isSuccess])

    useEffect(() => {
        if(mutation.isError) {
            mutation.error.response.json().then(res => {
                setError(res.message)
            })

        }
    }, [mutation.isError])


    return (
        <FormContainer>
            <FormContent onSubmit={handleSubmit(onSubmit)}>
                <FormError>
                    {error}
                </FormError>
                <InputGroup>
                    <InputName>ФИО</InputName>
                    <Input {...register('name', {required: true})}/>
                </InputGroup>

                <InputGroup>
                    <InputName>Группа</InputName>
                    <Input {...register('group', {required: true})}/>
                </InputGroup>

                <Button>
                    Зарегистрироваться
                </Button>
            </FormContent>
        </FormContainer>
    );
};

export default Registration;