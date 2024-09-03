import React from 'react';
import * as S from './styles';

import logonavbar from '../../assets/svg/logonavbar.svg';
import puser from '../../assets/svg/puser.svg';

export default function Navbar() {
    return (
        <S.NavbarOpcoes>
            <S.LogoWrapper>
                <img src={logonavbar} alt="Logo" />
            </S.LogoWrapper>
            <S.Opcoes>
                <a href="/Home/profissional">Início</a>
                <a href="/pesquisar/perfil/profissional">Serviços</a>
                <a href="/pesquisar/login/guia">Guias</a>
            </S.Opcoes>
            <S.Botaoperfil>
                <a href="/PerfilPrivado">
                    <img src={puser} alt="Logo" />
                </a>
            </S.Botaoperfil>
        </S.NavbarOpcoes>
    );
}
