import React, { useState } from 'react';
import { IoEyeSharp, IoEyeOffSharp, IoLockClosedSharp } from 'react-icons/io5';
import Ondatwo from '../../assets/svg/ondaOne.svg';
import Logo from '../../assets/logo.png';
import * as S from './styles';

function RedefinirSenha() {
    const [inputType, setInputType] = useState('password');
    const [inputValue, setInputValue] = useState('');
    const [confirmInputValue, setConfirmInputValue] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');

    const togglePasswordVisibility = () => {
        setInputType((prevType) =>
            prevType === 'password' ? 'text' : 'password'
        );
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value.length > 8) {
            setPasswordStrength('Senha forte');
        } else {
            setPasswordStrength('Senha fraca');
        }
    };

    return (
        <S.Container>
            <S.LeftSide>
                <S.Logo>
                    <img src={Logo} alt="Logo" />
                </S.Logo>
                <S.BackgroundImg src={Ondatwo} alt="Background" />
            </S.LeftSide>
            <S.RightSide>
                <S.Content>
                    <S.RedefinirTitleContainer>
                        <S.RedefinirTitle>Redefinir sua senha</S.RedefinirTitle>
                    </S.RedefinirTitleContainer>
                    <S.InputContainer>
                        <S.InputWrapper>
                            <S.LockIcon>
                                <IoLockClosedSharp />
                            </S.LockIcon>
                            <S.Input
                                type={inputType}
                                placeholder="Digite sua nova senha"
                                value={inputValue}
                                onChange={handlePasswordChange}
                            />
                            <S.Icon onClick={togglePasswordVisibility}>
                                {inputType === 'password' ? (
                                    <IoEyeSharp />
                                ) : (
                                    <IoEyeOffSharp />
                                )}
                            </S.Icon>
                        </S.InputWrapper>
                        <S.PasswordStrength>
                            {passwordStrength}
                        </S.PasswordStrength>
                        <S.InputWrapper>
                            <S.LockIcon>
                                <IoLockClosedSharp />
                            </S.LockIcon>
                            <S.Input
                                type={inputType}
                                placeholder="Confirme sua nova senha"
                                value={confirmInputValue}
                                onChange={(e) =>
                                    setConfirmInputValue(e.target.value)
                                }
                            />
                            <S.Icon onClick={togglePasswordVisibility}>
                                {inputType === 'password' ? (
                                    <IoEyeSharp />
                                ) : (
                                    <IoEyeOffSharp />
                                )}
                            </S.Icon>
                        </S.InputWrapper>
                        <S.Button>Redefinir</S.Button>
                    </S.InputContainer>
                </S.Content>
            </S.RightSide>
        </S.Container>
    );
}

export default RedefinirSenha;
