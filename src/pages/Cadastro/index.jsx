import React, { useState } from 'react';
import Ondatwo from '../../assets/svg/ondaOne.svg';
import Logo from '../../assets/logo.png';
import * as S from './styles';
import BotaoVoltar from '../../components/BotaoVoltar';
import VerificadorSenha from '../../components/VerificadorSenha';

function RedefinirSenha() {
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleNovaSenhaChange = (event) => {
        setNovaSenha(event.target.value);
    };

    const handleConfirmarSenhaChange = (event) => {
        setConfirmarSenha(event.target.value);
    };

    const handleRedefinirSenha = () => {
        // Lógica para redefinir a senha
        console.log('Senha redefinida:', novaSenha);
    };

    return (
        <S.Pai>
            <S.Redefinir>
                <S.CadastroTitle>CADASTRO</S.CadastroTitle>
            </S.Redefinir>

            <BotaoVoltar />

            <S.Tela>
                <S.Logo>
                    <img src={Logo} alt="Logo" />
                </S.Logo>
                <img
                    src={Ondatwo}
                    alt="Foto de fundo na cor azul em formato de ondas"
                />
            </S.Tela>


            <S.FormContainer>
            <S.InputContainer>
                    <S.InputLabel> NOME </S.InputLabel>
                    <S.Input
                        type=""
                        placeholder="Digite seu Nome"
                    />
                </S.InputContainer>
            <S.InputContainer>
                    <S.InputLabel> E-mail </S.InputLabel>
                    <S.Input
                        type="" 
                        placeholder="Digite seu e-mail"
                    />
                </S.InputContainer>

                <S.InputContainer>
                    <S.InputLabel> SENHA </S.InputLabel>
                    <S.Input
                        type="password"
                        value={novaSenha}
                        onChange={handleNovaSenhaChange}
                        placeholder="Digite sua senha"
                    />
                </S.InputContainer>

                <S.InputContainer>
                    <S.InputLabel> CONFIRMAR SENHA </S.InputLabel>
                    <S.Input
                        type="password"
                        value={confirmarSenha}
                        onChange={handleConfirmarSenhaChange}
                        placeholder="confirmar senha"
                    />
                </S.InputContainer>
                <S.Termos>li e aceito os termos de uso</S.Termos>

                <S.BotaoRedefinir onClick={handleRedefinirSenha}>
                    Cadastrar
                </S.BotaoRedefinir>
            </S.FormContainer>
        </S.Pai>
    );
}

export default RedefinirSenha;