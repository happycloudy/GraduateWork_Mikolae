import React, {ReactNode} from 'react';
import {ButtonBase} from "../ButtonBase/ButtonBase";

interface IProps {
    children: ReactNode
}

export const Button = ({children}: IProps) => {
    return (
        <ButtonBase>
            {children}
        </ButtonBase>
    );
};