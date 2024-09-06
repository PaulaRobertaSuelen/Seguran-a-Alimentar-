import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

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
        display: none;
    }
`;

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

export const Content = styled.div`
    margin-top: 40px;

    @media (max-width: 900px) {
        margin-top: 20px;
    }
`;

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
            font-size: 32px;
        }
    }
`;

export const Title = styled.h1`
    font-size: 36.8px;
    font-weight: 300;
    margin-bottom: 20px;

    @media (max-width: 900px) {
        font-size: 28.8px;
    }
`;

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

export const InputWrapper = styled.div`
    position: relative;
    width: 110%;
    margin-bottom: 30px;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const Input = styled.input`
    width: 110%;
    padding: 15px 40px 10px 30px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;

    @media (max-width: 900px) {
        width: 100%;
        padding: 10px 35px 10px 25px;
    }
`;

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
        left: 90%;
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
        theme === 'error' ? '#000' : theme === 'strong' ? '#000' : '#000'};
    font-size: 12.8px;
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
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #218838;
    }

    &:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
    }

    @media (max-width: 900px) {
        width: 80%;
    }
`;
