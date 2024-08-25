import React, { useState } from 'react';
import { IoEyeSharp, IoEyeOffSharp, IoLockClosedSharp } from 'react-icons/io5';
import Ondatwo from '../../assets/svg/ondaOne.svg';
import Logo from '../../assets/svg/logoS.svg';
import * as S from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../services/useAuth';
import TextInput from '../../components/FormFields/Input';

function RedefinirSenha() {
    const params = useParams();
    const navigate = useNavigate();

    const { updateUser } = useAuth();
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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (passwordMatch && inputValue.length >= 8) {
            const novaSenha = event.target.password.value;
            // Lógica para redefinir a senha
            updateUser(params.id, { senha: novaSenha })
                .then((res) => {
                    alert(res.data.message);
                    navigate('/login');
                })
                .catch((err) => {
                    alert(err.response.data.error);
                });
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
                    <S.InputContainer onSubmit={handleSubmit}>
                        <TextInput
                            name="password"
                            label="Nova Senha"
                            password
                            value={inputValue}
                            onChange={handlePasswordChange}
                            placeholder="********"
                        />
                        <S.PasswordStrength>
                            {passwordStrength}
                        </S.PasswordStrength>
                        <TextInput
                            name="confirmPassword"
                            label="Confirmar Senha"
                            password
                            value={confirmInputValue}
                            onChange={handleConfirmPasswordChange}
                            placeholder="********"
                        />
                        {!passwordMatch && (
                            <S.PasswordStrength theme="error">
                                As senhas não coincidem
                            </S.PasswordStrength>
                        )}
                        <S.Button
                            type="submit"
                            disabled={!passwordMatch || inputValue.length < 8}
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
