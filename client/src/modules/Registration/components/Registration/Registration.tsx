import React from 'react';
import {FormContainer, FormContent} from "../../../Form";
import {Input, InputGroup} from "../../../Input";
import {InputName} from "../../../Input";

const Registration = () => {
    return (
        <FormContainer>
            <FormContent>
                <InputGroup>
                    <InputName>ФИО</InputName>
                    <Input/>
                </InputGroup>
            </FormContent>
        </FormContainer>
    );
};

export default Registration;