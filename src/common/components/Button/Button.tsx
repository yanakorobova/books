import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './Button.module.scss'

type ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

export const Button:React.FC<ButtonPropsType> = ({disabled, ...restProps}) => {
    return (
        <button
            disabled={disabled}
            className={s.button}
            {...restProps}
        />
    );
};

