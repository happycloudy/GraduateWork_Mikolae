import React, {ReactNode} from 'react';
import {SelectBase} from "../SelectBase/SelectBase";
import {SelectItem} from "../SelectItem/SelectItem";

interface IProps {
    currentValue?: string
    values?: string[]
    setValue: (value: any) => void
    children?: ReactNode
}

export const Select = ({currentValue, values, setValue, children}: IProps) => {
    return (
        <SelectBase>
            {
                children ?
                    children :
                    values?.map(value => (
                        <SelectItem type={'button'} active={value == currentValue} key={value} onClick={() => setValue(value)}>
                            {value}
                        </SelectItem>
                    ))
            }
        </SelectBase>
    );
};