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

export const AvatarButton = styled.div`
    position: relative;
    cursor: pointer;
    color: #fff;
`;

export const FaUserCircle = styled.div`

`;

export const Card = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #101066;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 10px;
    width: 180px;
    color: white;
    z-index: 100;
`;

export const Info = styled.div`
    p{
        font-weight: bold;
        font-size: 14px;
        margin-top: 15px;
        margin-bottom: 2px;
    }
    margin-bottom: 15px;
`;

export const Dados = styled.text`
    font: 10px;
`;

export const Sair = styled.button`
    width: 35px;
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    color: red;
    text-decoration: none;
    margin-top: 5px;
    margin-bottom: 10px;
    &:hover {
        color: pink;
    }

    &:focus {
        outline: none;
    }
`;