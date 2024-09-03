import styled from 'styled-components';

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);  /* Escurece a página atrás do pop-up */
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
`;

export const Conteudo = styled.div`
    background-color: #101066;
    padding: 20px;
    border-radius: 20px;
    max-width: 50%;
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;

    @media (max-width: 900px) {
        max-width: 70%;
        margin: 0 5%;
    }
`;

export const Mensagem = styled.div`
    h1{
        color: white;
        font-size: 16px;
    }
    p{
        color: white;
        font-size: 12px;
    }
`;

export const Campo = styled.div`
    padding-top: 2%;
    padding-bottom: 1%;
`;

export const Link = styled.input`
width: 100%;
padding: 10px;
margin-bottom: 15px;
font-size: 14px;
border: none;
border-radius: 20px;
box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
transition: border-color 0.3s ease;

&:focus {
    border-color: #007BFF;
    outline: none;
}
`;

export const Botoes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Confirmar = styled.button`
    width: 110px;
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #33B44D;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #218838;
    }

    &:focus {
        outline: none;
    }
`;

export const Sair = styled.button`
    width: 35px;
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    color: red;

    &:hover {
        color: pink;
    }

    &:focus {
        outline: none;
    }
`;