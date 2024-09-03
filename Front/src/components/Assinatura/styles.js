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
    display: flex;
    flex-direction: column;
    background-color: #101066;
    padding: 20px;
    border-radius: 20px;
    max-width: 55%;
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;

    @media (max-width: 900px) {
        max-width: 90%;
        margin: 0 5%;
    }
`;

export const Mensagem = styled.div`
    background-color: white;
    border-radius: 20px;
    padding: 10px;
    margin-bottom: 20px;
    h1{
        color: black;
        font-size: 16px;
        margin-bottom: 5px;
    }
    p{
        color: black;
        font-size: 14px;
    }
`;

export const Status = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`;

export const Assinatura = styled.text`
    margin-bottom: 5px;
    color: white;
    font-size: 16px;
    font-weight: bold;
`;

export const Estado = styled.text`
    margin-bottom: 15px;
    color: white;
    font-size: 12px;
    font-weight: normal;
`;

export const Vigencia = styled.text`
    margin-bottom: 5px;
    color: white;
    font-size: 16px;
    font-weight: bold;
`;

export const Dias = styled.text`
    color: white;
    font-size: 12px;
    font-weight: normal;
`;

export const Pagamento = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
    p{
        color: white;
        font: 20px;
        font-weight: bold;
        margin-bottom: 30px;
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

export const BotaoAssinatura = styled.button`
    background-color: #33B44D;
    color: white;
    font-size: 12px;
    font-weight: bold;
    border: none;
    border: none;
    border-radius: 20px;
    padding: 10px;
    cursor: pointer;
    margin-top: 15px;
    width: 200px;
    &:hover {
            background-color: #1C682C;
        }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
`;

export const PayPalScriptProvider = styled.div`

`;

export const PayPalButtons = styled.button`

`;