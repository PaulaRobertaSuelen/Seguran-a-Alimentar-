// src/components/Navbar/styles.js
import styled from 'styled-components';

export const NavbarOpcoes = styled.div`
    display: flex;
    background-color: #101066; /* Azul escuro */
    color: #ffffff;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

export const LogoWrapper = styled.div`
    display: flex;
    margin-left: 100px;
    align-items: center;
`;

export const Opcoes = styled.div`
    display: flex;
    gap: 20px;
    a {
        text-decoration: none;
        color: inherit;
        padding: 10px 15px;
        transition: background-color 0.3s ease;
        border-radius: 10px;

        &:hover {
            background-color: #33b44d;
        }
    }
`;

export const BotaoEntrar = styled.button`
    margin-right: 250px;
    border-radius: 8px;
    background-color: #33b44d;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    text-align: center;
    padding: 10px;
    a {
        text-decoration: none;
        color: inherit;
        padding: 10px 15px;
    }
`;
