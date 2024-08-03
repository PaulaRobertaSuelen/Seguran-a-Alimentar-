import React, { useState } from 'react';
import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5';
import Ondatwo from '../../assets/svg/ondaOne.svg';
import Logo from '../../assets/logo.png';
import Quebracabeça from '../../assets/quebracabeça.png'; // Corrigido o caminho do ícone
import * as S from './styles';
import BotaoVoltar from '../../components/BotaoVoltar';
import VerificadorSenha from '../../components/VerificadorSenha';

function RedefinirSenha() {
    const [inputType, setInputType] = useState('password');
    const [inputValue, setInputValue] = useState('');
    const [confirmInputValue, setConfirmInputValue] = useState('');

    const togglePasswordVisibility = () => {
        setInputType((prevType) =>
            prevType === 'password' ? 'text' : 'password'
        );
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
                <BotaoVoltar />
                <S.Content>
                    <S.RedefinirTitleContainer>
                        <S.RedefinirTitle>Redefinir sua senha</S.RedefinirTitle>
                        <img
                            src={Quebracabeça}
                            alt="Ícone de redefinir senha"
                            className="icon"
                        />
                    </S.RedefinirTitleContainer>
                    <S.RedefinirText>Preencha os campos abaixo</S.RedefinirText>
                    <S.InputContainer>
                        <S.InputWrapper>
                            <S.Input
                                type={inputType}
                                placeholder="Digite sua nova senha"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <S.Icon onClick={togglePasswordVisibility}>
                                {inputType === 'password' ? (
                                    <IoEyeSharp />
                                ) : (
                                    <IoEyeOffSharp />
                                )}
                            </S.Icon>
                        </S.InputWrapper>
                        <S.InputWrapper>
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
