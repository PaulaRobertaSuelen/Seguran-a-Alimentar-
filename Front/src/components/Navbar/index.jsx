import React from 'react';
import * as S from './styles';
import logonavbar from '../../assets/svg/logonavbar.svg';

export default function Navbar() {
    return (
        <S.NavbarOpcoes>
            <S.LogoWrapper>
                <img src={logonavbar} alt="Logo" />
            </S.LogoWrapper>
            <S.Opcoes>
                <a href="/cadastroprofissional">Sou Profissional</a>
                <a href="/">Início</a>
                <a href="/Cadastro">Serviços</a>
                <a href="/PesquisarGuia">Guias</a>
            </S.Opcoes>
            <S.BotaoEntrar>
                <a href="/login">Entrar</a>
            </S.BotaoEntrar>
        </S.NavbarOpcoes>
    );
}
