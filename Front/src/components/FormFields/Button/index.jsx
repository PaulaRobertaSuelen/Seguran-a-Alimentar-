import React from 'react';
import { SButton } from './styles';

export default function Button({
    children,
    onClick,
    disabled,
    onChange,
    styles,
    ...rest
}) {
    return (
        <SButton
            type="submit"
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
