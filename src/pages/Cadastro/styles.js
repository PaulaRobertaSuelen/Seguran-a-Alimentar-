import styled from 'styled-components';

export const Pai = styled.div`
    display: flex;
    background-color: #deedf5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    position: relative;
    height: 50vh;
    margin: 0;
`;

export const Redefinir = styled.div`
    text-align: center;
    margin-bottom: auto;
`;

export const CadastroTitle = styled.h1`
    margin-left: 550px;
    margin-top: 80px;
`;

export const Termos = styled.p`
    margin-top: 60px;
    margin-left: 5px;
`;

export const Tela = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 40vw;
    height: 100vh;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 0;
`;

export const Logo = styled.div`
    display: flex;
    position: absolute;
    top: 280px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

export const VerificadorContainer = styled.div`
display: flex;
    margin-top: 150px;
    margin-left: 550px;
    padding: 50px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    width: 500px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormContainer = styled.div`
    margin-top: 35px;
    margin-left: 550px;
    padding: 50px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    width: 500px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
`;

export const InputContainer = styled.div`
    margin-bottom: 20px;
`;

export const InputLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
`;

export const Input = styled.input`
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
`;

export const BotaoRedefinir = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #0056b3;
    }
`;
