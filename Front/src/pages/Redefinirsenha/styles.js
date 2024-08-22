import styled from 'styled-components';

// Container principal
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
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
`;

// Seção principal (FormContainer) com conteúdo
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

// Container para o título e formulário
export const Content = styled.div`
    text-align: center;
    margin-top: 40px;
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
    & form {
        width: 100%;
        gap: 10px;
        display: flex;
        flex-direction: column;
    }
    & p {
        font-size: 14px;
        font-weight: 200;
    }
    & p > a {
        color: #1976d2;
        text-decoration: none;
        cursor: pointer;
    }
`;

// Título
export const Title = styled.h1`
    font-size: 2.3rem;
    font-weight: 300;
    margin-bottom: 20px;
`;

// Contêiner para os campos de entrada
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
`;

// Wrapper para o campo de entrada
export const InputWrapper = styled.div`
    position: relative;
    width: 110%;
    margin-bottom: 30px;
`;

// Campo de entrada
export const Input = styled.input`
    width: 110%;
    padding: 15px 40px 10px 30px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
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
            : theme === 'strong'? '#28a745': '#dc3545'};
    font-size: 0.9rem;
    margin-top: -15px;
    margin-bottom: 15px;
`;

// Botão para redefinir senha
export const Button = styled.button`
    width: 50%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        background-color: #218838;
    }
    &:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
    }
`;
