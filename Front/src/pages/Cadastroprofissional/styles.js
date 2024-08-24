import styled from 'styled-components';

export const PageWrapper = styled.div`
    position: relative;
    min-height: 100vh;
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
        font-size: 2rem;
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
    flex: 1 1 30%;
    max-width: 300px;
    text-align: center;
    margin: 10px;

    img {
        width: 50px;
        height: 50px;
    }

    p {
        font-size: 1rem;
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
        font-size: 1.5rem;
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
        font-size: 1.5rem;
        color: #101066;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        width: 80%;
        max-width: 400px;
        padding: 10px;
        margin: 10px 0;
        border-radius: 5px;
        border: 1px solid #ccc;
    }

    button {
        background-color: #10b981;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;

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
    /* text-align: center;
    justify-content: center; */

    .check {
        width: 10%;
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
