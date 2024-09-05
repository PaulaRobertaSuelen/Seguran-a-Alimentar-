import React, { useState } from 'react';
import * as S from './styles';
import logonavbar from '../../assets/svg/logonavbar.svg';
import puser from '../../assets/svg/puser.svg';

export default function Navbarlogin() {
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
                <a href="/Home/login">Início</a>
                <a href="/pesquisar/profissional">Serviços</a>
                <a href="/Pesquisar/guia/login">Guias</a>
            </S.Opcoes>
            <S.Botaoperfil>
                <a href="/perfil/usuario">
                    <img src={puser} alt="Perfil" />
                </a>
            </S.Botaoperfil>
        </S.NavbarOpcoes>
    );
}
