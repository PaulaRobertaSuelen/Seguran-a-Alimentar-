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
        color: #333;
    }

    &:focus {
        outline: none;
    }
`;