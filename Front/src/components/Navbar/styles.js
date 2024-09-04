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
        width: 180px; /* Aumenta o tamanho da logo na versão normal */
    }

    @media (max-width: 900px) {
        margin-left: 0;
        img {
            width: 100px; /* Tamanho menor da logo na versão mobile */
        }
    }
`;

export const Opcoes = styled.div`
    display: flex;
    gap: 10px;

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
        flex-direction: column;
        gap: 10px;
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        background-color: #101066;
        padding: 10px;
        width: 100%;
        justify-content: space-around;
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

    @media (max-width: 900px) {
        margin-right: 0;
        width: auto;
        order: 3; /* Move o botão para o final na versão mobile */
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
        order: 2; /* Move o menu hambúrguer para a direita na versão mobile */
    }
`;
