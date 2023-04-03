import React, {FormEvent} from 'react';
import {Button} from "../../../Buttons";
import {FormContent} from "../FormContent/FormContent";

const LoginStudent = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <FormContent onSubmit={handleSubmit}>
            <Button>
                Войти как студент
            </Button>
        </FormContent>
    );
};

export default LoginStudent;