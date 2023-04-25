import React from 'react';
import {useUserStore} from "../../../../stores/user/user.store";
import {Navigate} from "react-router-dom";

interface IProps {
    children: any
}

export const AuthRoute = ({children}: IProps) => {
    const isAuth = useUserStore(state => state.isAuth)

    if(!isAuth) {
        return <Navigate to={'/'} replace={true}/>
    }

    return children
};