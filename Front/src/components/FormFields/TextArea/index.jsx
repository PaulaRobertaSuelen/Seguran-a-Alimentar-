import React, { useState } from 'react';
import * as S from './styles';
import { IoMdEye, IoIosEyeOff } from 'react-icons/io';
import { MdLock } from 'react-icons/md';

function TextAreaInput({
    label,
    name,
    placeholder,
    styles,
    value,
    defaultValue,
    onChange,
    onBlur,
    iconLeft,
    iconRight,
    rows = 4,
    password = false,
    type = 'text',
    disabled,
}) {
    const [openEye, setOpenEye] = useState(true);

    const handleEye = () => {
        setOpenEye(!openEye);
    };

    return (
        <S.Container styles={styles}>
            {label && <S.Label>{label}</S.Label>}
            <S.InputContainer>
                {iconLeft && !password && <S.Icon>{iconLeft}</S.Icon>}
                {password && <MdLock color="#4377ff" />}
                <S.Input
                    name={name}
                    type={openEye && password ? 'password' : type}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    rows={rows}
                    disabled={disabled}
                    defaultValue={defaultValue}
                />
                {password &&
                    (openEye ? (
                        <IoMdEye color="#4377ff" onClick={handleEye} />
                    ) : (
                        <IoIosEyeOff color="#4377ff" onClick={handleEye} />
                    ))}
                {iconRight && !password && <S.Icon>{iconRight}</S.Icon>}
            </S.InputContainer>
        </S.Container>
    );
}

export default TextAreaInput;
