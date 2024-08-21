// src/components/Navbar/index.jsx
import React from 'react';
import * as S from './styles';
import logonavbar from '../../assets/svg/logonavbar.svg'; // Importa o SVG como um arquivo comum

export default function Navbar() {
    return (
        <S.NavbarOpcoes>
            <S.LogoWrapper>
                <img src={logonavbar} alt="Logo" />{' '}
                {/* Usa a tag <img> para testar */}
            </S.LogoWrapper>
            <S.Opcoes>
                <a href="/">Sou Profissional</a>
                <a href="/">Início</a>
                <a href="/">Serviços</a>
                <a href="/">Sobre nós</a>
            </S.Opcoes>
            <S.BotaoEntrar>
                <a href="/">Entrar</a>
            </S.BotaoEntrar>
        </S.NavbarOpcoes>
    );
}
