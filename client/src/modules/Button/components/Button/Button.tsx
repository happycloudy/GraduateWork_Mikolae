import React, {ReactNode} from 'react';
import {ButtonBase} from "../ButtonBase/ButtonBase";

type IProps = {
    children: ReactNode
} & JSX.IntrinsicElements['button']

export const Button = ({children}: IProps) => {
    return (
        <ButtonBase>
            {children}
        </ButtonBase>
    );
};