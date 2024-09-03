import React, { useState } from 'react';
import * as S from './styles';
import logonavbar from '../../assets/svg/logonavbar.svg';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <S.NavbarOpcoes>
            <S.LogoWrapper>
                <img src={logonavbar} alt="Logo" />
            </S.LogoWrapper>
            <S.HamburgerMenu onClick={toggleMenu}>
                <div />
                <div />
                <div />
            </S.HamburgerMenu>
            <S.Opcoes isOpen={isOpen}>
                <a href="/cadastroprofissional">Sou Profissional</a>
                <a href="/">Início</a>
                <a href="/Login">Serviços</a>
                <a href="/PesquisarGuia">Guias</a>
            </S.Opcoes>
            <S.BotaoEntrar>
                <a href="/login">Entrar</a>
            </S.BotaoEntrar>
        </S.NavbarOpcoes>
    );
}
