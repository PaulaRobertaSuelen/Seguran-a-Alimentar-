import React, { useState } from 'react';
import { IoEyeSharp, IoEyeOffSharp, IoLockClosedSharp } from 'react-icons/io5';
import Ondatwo from '../../assets/svg/ondaOne.svg';
import Logo from '../../assets/svg/logoS.svg';
import * as S from './styles';

function RedefinirSenha() {
    const [inputType, setInputType] = useState('password');
    const [inputValue, setInputValue] = useState('');
    const [confirmInputValue, setConfirmInputValue] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

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

        // Verifica se as senhas coincidem
        setPasswordMatch(value === confirmInputValue);
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmInputValue(value);

        // Verifica se as senhas coincidem
        setPasswordMatch(inputValue === value);
    };

    const handleSubmit = () => {
        if (passwordMatch && inputValue.length > 8) {
            // Lógica para redefinir a senha
            alert('Senha redefinida com sucesso!');
        } else {
            alert('Verifique se as senhas coincidem e se a senha é forte.');
        }
    };

    return (
        <S.Container>
            <S.AsideContainer>
                <img src={Ondatwo} className="background" alt="Background" />
                <img src={Logo} className="logo" alt="Logo" />
            </S.AsideContainer>
            <S.FormContainer>
                <S.Content>
                    <S.TitleContainer>
                        <S.Title>Redefinir sua senha</S.Title>
                    </S.TitleContainer>
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
                                onChange={handleConfirmPasswordChange}
                            />
                            <S.Icon onClick={togglePasswordVisibility}>
                                {inputType === 'password' ? (
                                    <IoEyeSharp />
                                ) : (
                                    <IoEyeOffSharp />
                                )}
                            </S.Icon>
                        </S.InputWrapper>
                        {!passwordMatch && (
                            <S.PasswordStrength theme="error">
                                As senhas não coincidem
                            </S.PasswordStrength>
                        )}
                        <S.Button
                            onClick={handleSubmit}
                            disabled={!passwordMatch || inputValue.length <= 8}
                        >
                            Redefinir
                        </S.Button>
                    </S.InputContainer>
                </S.Content>
            </S.FormContainer>
        </S.Container>
    );
}

export default RedefinirSenha;
