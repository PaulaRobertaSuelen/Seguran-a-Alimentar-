import React, { useState, useEffect } from 'react';
import * as S from './styles';
import logonavbar from '../../assets/svg/logonavbar.svg';
import puser from '../../assets/svg/puser.svg';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [tipoUsuario, setTipoUsuario] = useState('');

    useEffect(() => {
        // Verifica se há um usuário autenticado no localStorage
        const storedTipoUsuario = localStorage.getItem('tipoUsuario');
        setTipoUsuario(storedTipoUsuario);
    }, []);

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
                {!tipoUsuario ? (
                    // Navbar para usuários não autenticados
                    <>
                        <a href="/cadastro/profissional">Sou Profissional</a>
                        <a href="/">Início</a>
                        <a href="/Login">Serviços</a>
                        <a href="/pesquisarguia">Guias</a>
                    </>
                ) : tipoUsuario === 'comum' ? (
                    // Navbar para usuários comuns
                    <>
                        <a href="/">Início</a>
                        <a href="/pesquisar/profissional">Serviços</a>
                        <a href="/pesquisarguia">Guias</a>
                    </>
                ) : (
                    // Navbar para usuários profissionais
                    <>
                        <a href="/">Início</a>
                        <a href="/pesquisar/profissional">Serviços</a>
                        <a href="/pesquisarguia">Guias</a>
                    </>
                )}
            </S.Opcoes>
            {tipoUsuario ? (
                // Botão de perfil para usuários autenticados
                <S.Botaoperfil>
                    <a href={tipoUsuario === 'profissional' ? "/PerfilPrivado" : "/perfil/usuario"}>
                        <img src={puser} alt="Perfil" />
                    </a>
                </S.Botaoperfil>
            ) : (
                // Botão de entrar para usuários não autenticados
                <S.BotaoEntrar>
                    <a href="/login">Entrar</a>
                </S.BotaoEntrar>
            )}
        </S.NavbarOpcoes>
    );
}