import styled from 'styled-components';

// Container principal
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

// Seção lateral (AsideContainer) com fundo
export const AsideContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    & .background {
        object-fit: cover;
        max-height: 100vh;
    }
    & .logo {
        position: absolute;
        width: 140px;
        height: 190px;
    }

    @media (max-width: 900px) {
        display: none; /* Esconder a seção lateral em telas menores */
    }
`;

// Seção principal (FormContainer) com conteúdo
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (max-width: 900px) {
        padding: 20px;
    }
`;

// Container para o título e formulário
export const Content = styled.div`
    margin-top: 40px;

    @media (max-width: 900px) {
        margin-top: 20px;
    }
`;

// Container para o título
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    & h1 {
        margin-bottom: 30px;
        font-size: 48px;
        font-weight: 300;
    }

    @media (max-width: 900px) {
        & h1 {
            font-size: 32px; /* Ajustar tamanho do título */
        }
    }
`;

// Título
export const Title = styled.h1`
    font-size: 36.8px; /* 2.3rem = 36.8px */
    font-weight: 300;
    margin-bottom: 20px;

    @media (max-width: 900px) {
        font-size: 1.8rem; /* Ajustar tamanho do título para mobile */
    }
`;

// Contêiner para os campos de entrada
export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;

    @media (max-width: 900px) {
        padding: 15px;
        max-width: 100%;
    }
`;

// Wrapper para o campo de entrada
export const InputWrapper = styled.div`
    position: relative;
    width: 110%;
    margin-bottom: 30px;

    @media (max-width: 900px) {
        width: 100%; /* Ajustar largura do campo de entrada */
    }
`;

// Campo de entrada
export const Input = styled.input`
    width: 110%;
    padding: 15px 40px 10px 30px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px; /* 1rem = 16px */
`;

// Ícone de visibilidade da senha
export const Icon = styled.div`
    position: absolute;
    left: 400px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #1976d2;

    &:hover {
        color: #000;
    }

    @media (max-width: 900px) {
        left: 90%; /* Ajustar posição do ícone */
    }
`;

// Ícone de bloqueio
export const LockIcon = styled.div`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #1976d2;
`;

// Força da senha
export const PasswordStrength = styled.p`
    text-align: left;
    width: 100%;
    color: ${({ theme }) =>
        theme === 'error'
            ? '#dc3545'
            : theme === 'strong'
              ? '#28a745'
              : '#28a745'};
    font-size: 12.8px; /* 0.8rem = 12.8px */
    margin-top: 5px;
    margin-bottom: 10px;
`;

// Botão para redefinir senha
export const Button = styled.button`
    width: 50%;
    padding: 10px;
    margin-top: 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px; /* 1rem = 16px */
    cursor: pointer;

    &:hover {
        background-color: #218838;
    }

    &:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
    }

    @media (max-width: 900px) {
        width: 80%; /* Aumentar largura do botão para mobile */
    }
`;
