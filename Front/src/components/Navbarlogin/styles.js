import styled from 'styled-components';

export const NavbarOpcoes = styled.div`
    display: flex;
    background-color: #101066;
    color: #ffffff;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    position: relative;

    @media (max-width: 900px) {
        padding: 10px;
        flex-direction: row;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 260px;

    img {
        width: 180px;
    }

    @media (max-width: 900px) {
        margin-left: 0;
        order: 1;
    }
`;

export const Opcoes = styled.div`
    display: flex;
    gap: 30px;

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

    @media (max-width: 900px) {
        flex-direction: row;
        gap: 10px;
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        background-color: #101066;
        padding: 10px;
        width: 100%; /* Garantir que ocupe toda a largura disponível */
        justify-content: space-around; /* Distribuir itens uniformemente */
    }
`;

export const Botaoperfil = styled.button`
    margin-right: 320px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-align: center;

    @media (max-width: 900px) {
        margin-right: 0;
        order: 2;
    }
`;

export const HamburgerMenu = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    cursor: pointer;

    div {
        width: 100%;
        height: 3px;
        background-color: white;
        border-radius: 3px;
    }

    @media (max-width: 900px) {
        display: flex;
        margin-left: 15px;
        order: 3;
    }
`;
