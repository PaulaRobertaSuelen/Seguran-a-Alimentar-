import React, { useState } from 'react';
import * as S from './styles';

import logonavbar from '../../assets/svg/logonavbar.svg';
import User from '../../assets/svg/puser.svg';
import { FaUserCircle } from 'react-icons/fa';

export default function Navbar() {

    const [isCardVisible, setIsCardVisible] = useState(false);

    const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
    };

    const handleClick = () => {
        window.location.href = '/';
    };

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
            <S.AvatarButton onClick={toggleCardVisibility}>
                <FaUserCircle size={30} />
                {isCardVisible && (
                    <S.Card>
                        <S.Info>
                            <p>Usuário:</p>
                            <S.Dados>Maria Silva</S.Dados>
                            <p>Email:</p>
                            <S.Dados>silvamaria@gmail.com</S.Dados>
                            <p>Telefone:</p>
                            <S.Dados>00 0 0000-0000</S.Dados>
                        </S.Info>
                        <S.Sair onClick={handleClick}>Sair</S.Sair>
                    </S.Card>
                    )}
            </S.AvatarButton>
            </S.Botaoperfil>
        </S.NavbarOpcoes>
    );
}
