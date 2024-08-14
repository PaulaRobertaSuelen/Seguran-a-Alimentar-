import styled from "styled-components";

export const NavbarOpcoes = styled.div`
    display: flex;
    background-color: #2727E8;
    color: #FFFFFF;
    justify-content: space-between;
    font-weight: bold;
    padding: 15px;
    align-items: center;
`

export const BotaoEntrar = styled.button`
    margin-left: 3%;
    border-radius: 5px;
    background-color: #33B44D;
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
`

export const Opcoes = styled.div`
    gap: 20px;
    a {
    text-decoration: none;
    color: inherit;
    padding: 10px 15px;
    transition: background-color 0.3s ease;
    border-radius: 10px;

        &:hover {
            background-color: #33B44D;  
        }
    }
`