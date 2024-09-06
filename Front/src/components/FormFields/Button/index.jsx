import React from 'react';
import { SButton } from './styles';

export default function Button({
    children,
    onClick,
    disabled,
    onChange,
    styles,
    type = 'submit',
    ...rest
}) {
    return (
        <SButton
            type={type}
            onClick={onClick}
            onChange={onChange}
            disabled={disabled}
            style={styles}
            {...rest}
        >
            {children}
        </SButton>
    );
}
