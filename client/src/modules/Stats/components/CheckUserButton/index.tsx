import React from 'react';

const CheckUserButton = () => {

    const handleDetect = () => {
        // dispatch(createUserUUID())
    }

    return (
        <button onClick={handleDetect}>
            Определить пользователя
        </button>
    );
};

export default CheckUserButton;