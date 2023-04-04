import React, {FormEvent} from 'react';
import {FormContent} from "../../../Form";

const LoginTeacher = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <FormContent onSubmit={handleSubmit}>
          Вход для преподавателя
        </FormContent>
    );
};

export default LoginTeacher;