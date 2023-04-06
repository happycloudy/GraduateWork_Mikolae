import React, {useCallback, useState} from 'react';
import {Roles} from "../../enums/loginType.enum";
import {roles} from "../../types/roles";
import {Select, SelectItem} from "../../../Select";
import LoginStudent from "../LoginStudent/LoginStudent";
import LoginTeacher from "../LoginTeacher/LoginTeacher";
import {FormContainer} from "../../../Form";

export const Login = () => {
    const [type, setType] = useState<Roles>(Roles.Student)


    const loginForm = useCallback(() => {
        switch (type) {
            case Roles.Student:
                return <LoginStudent/>
            case Roles.Teacher:
                return <LoginTeacher/>
        }
    }, [type])


    const handleType = (type: Roles) => setType(type)

    return (
        <FormContainer>
            <Select currentValue={type} setValue={handleType} values={roles}>
                <SelectItem onClick={() => handleType(Roles.Student)} active={type === Roles.Student}>Я студент</SelectItem>
                <SelectItem onClick={() => handleType(Roles.Teacher)} active={type === Roles.Teacher}>Я преподаватель</SelectItem>
            </Select>
            {loginForm()}
        </FormContainer>
    );
};