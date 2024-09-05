import styled from 'styled-components';

export const PageWrapper = styled.div`
    position: relative;
    min-height: 100px;
    background: url(${(props) => props.backgroundImage}) no-repeat center center;
    background-size: cover;
`;

export const Container = styled.div`
    max-width: 900px; /* Reduzindo a largura máxima do container */
    margin: 0 auto;
    padding: 20px; /* Ajustando o padding para menos espaço interno */
    position: relative;
`;

export const InfoSection = styled.section`
    text-align: center;
    margin-bottom: 40px;

    h2 {
        font-size: 32px;
        color: #101066;
    }
`;

export const InfoCards = styled.div`
    display: flex;
    color: #101066;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const InfoCard = styled.div`
    flex: 1 1 30px;
    max-width: 300px;
    text-align: center;
    margin: 10px;

    img {
        width: 50px;
        height: 50px;
    }

    p {
        font-size: 16px;
        font-weight: bold;
        margin-top: 10px;
    }
`;

export const StepsSection = styled.section`
    background-color: #eff6ff;
    color: #101066;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 40px;

    h3 {
        font-size: 26px;
        color: #101066;
    }

    ol {
        margin-left: 20px;
        text-align: left;
    }
`;

export const FormSection = styled.section`
    text-align: center;

    h3 {
        font-size: 26px;
        color: #101066;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 10px;
    button {
        text-decoration-style: none;
        background-color: #10b981;
        color: white;
        font-weight: bold;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: white;

        &:hover {
            background-color: #059669;
        }
    }
`;

export const Terms = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    margin-bottom: 10px;
    .check {
        width: 10px;
    }
    a {
        color: #101066;
        text-decoration: none;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Termos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & h1 {
        
        text-align: center;
    }
    & p {
        font-size: 14px;
        text-align: center;
    }
`;
export const LostPass = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    & a {
        color: #1976d2;
        font-size: 14px;
        text-decoration: none;
        cursor: pointer;
    }
`;

