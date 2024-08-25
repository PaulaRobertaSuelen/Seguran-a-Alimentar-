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
                <a href="/cadastroprofissional">Sou Profissional</a>
                <a href="/">Início</a>
                <a href="/PesquisarProficional">Serviços</a>
                <a href="/PesquisarGuia">Guias</a>
            </S.Opcoes>
            <S.Botaoperfil>
                <a href="/Paginaperfil">
                    <img src={puser} alt="Logo" />
                </a>
            </S.Botaoperfil>
        </S.NavbarOpcoes>
    );
}
