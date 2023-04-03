import React from 'react';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {createUserUUID} from "../../../store/user/createUserUUID";

const CheckUserButton = () => {
    const dispatch = useAppDispatch()

    const handleDetect = () => {
        dispatch(createUserUUID())
    }

    return (
        <button onClick={handleDetect}>
            Определить пользователя
        </button>
    );
};

export default CheckUserButton;