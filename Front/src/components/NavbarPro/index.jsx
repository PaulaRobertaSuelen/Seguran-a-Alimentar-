import React, { useState } from 'react';
import * as S from './styles';

import logonavbar from '../../assets/svg/logonavbar.svg';
import puser from '../../assets/svg/puser.svg';

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
                <a href="/home/profissional">Início</a>
                <a href="/pesquisar/perfil/profissional">Serviços</a>
                <a href="/pesquisar/login/guia">Guias</a>
            </S.Opcoes>
            <S.Botaoperfil>
                <a href="/perfil/privado">
                    <img src={puser} alt="Perfil" />
                </a>
            </S.Botaoperfil>
        </S.NavbarOpcoes>
    );
}
