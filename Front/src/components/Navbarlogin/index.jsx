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
                <a href="/Homelogin">Início</a>
                <a href="/PesquisarProfissional">Serviços</a>
                <a href="/Pguialogin">Guias</a>
            </S.Opcoes>
            <S.Botaoperfil>
                <a href="/Paginaperfil">
                    <img src={puser} alt="Logo" />
                </a>
            </S.Botaoperfil>
        </S.NavbarOpcoes>
    );
}
