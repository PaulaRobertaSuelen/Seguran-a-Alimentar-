import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 900px) {
        padding: 25px;
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

        @media (max-width: 900px) {
            display: none;
        }
    }
    & .logo {
        position: absolute;
        width: 140px;
        height: 190px;

        @media (max-width: 900px) {
           display: none;
        }
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Button = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 15px;
    padding-top: 5px;
`;

export const Login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;

    @media (max-width: 900px) {
        width: 90%;
    }

    & h1 {
        margin-bottom: 20px;
        font-size: 48px;
        font-weight: 300;

        @media (max-width: 900px) {
            font-size: 32px;
        }
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

        @media (max-width: 900px) {
            font-size: 12px;
        }
    }

    & p > a {
        color: #1976d2;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const LostPass = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }

    & a {
        color: #1976d2;
        font-size: 14px;
        font-weight: 200;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const ContainerForgot = styled.div`
    width: 40vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 900px) {
        width: 80vw;
        height: auto;
    }
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1 {
        line-height: 2em;
        text-align: center;

        @media (max-width: 900px) {
            font-size: 24px;
        }
    }

    & p {
        font-size: 14px;
        width: 70%;
        text-align: center;

        @media (max-width: 900px) {
            width: 90%;
            font-size: 12px;
        }
    }
`;

export const ContainerForm = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 20px;

    & a {
        text-align: center;
        color: #4a4a4a;
        font-size: 14px;

        @media (max-width: 900px) {
            font-size: 12px;
        }
    }
`;

export const Bat = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
`;




