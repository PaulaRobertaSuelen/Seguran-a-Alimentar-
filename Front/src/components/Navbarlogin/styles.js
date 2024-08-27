import styled from 'styled-components';

export const NavbarOpcoes = styled.div`
    display: flex;
    background-color: #101066;
    color: #ffffff;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

export const LogoWrapper = styled.div`
    display: flex;
    margin-left: 280px;
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

export const Botaoperfil = styled.button`
    margin-right: 350px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-align: center;
`;
