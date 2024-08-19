import React from 'react';
import * as S from './styles';

const TextInput = ({
    label,
    name,
    placeholder,
    styles,
    onChange,
    onBlur,
    iconLeft,
    iconRight,
    type = 'text',
}) => {
    return (
        <S.Container styles={styles}>
            {label && <S.Label>{label}</S.Label>}
            <S.InputContainer>
                {iconLeft && <S.Icon>{iconLeft}</S.Icon>}
                <S.Input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {iconRight && <S.Icon>{iconRight}</S.Icon>}
            </S.InputContainer>
        </S.Container>
    );
};

export default TextInput;
