import styled from 'styled-components';


export const EditarSobre = styled.div`
    h1{
        font-size: 16px;
        font-weight: bold;
    }
    margin-bottom: 25px;
`;

export const EditarContato = styled.div`
    h1{
        font-size: 16px;
        font-weight: bold;
    }
    margin-bottom: 25px;
`;

export const EditarAnexos = styled.div`
    h1{
        font-size: 16px;
        font-weight: bold;
    }
    margin-bottom: 25px;
`;

export const TextoEditavel = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Paragraph = styled.p`
    font-size: 16px;
    color: black;
    padding: 10px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    font-size: 12px;
    padding: 10px;
    border: none;
    border-radius: 20px;
    resize: none;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #007BFF;
        outline: none;
    }
`;

export const Button = styled.button`
    margin-top: 5px;
    padding: 2px;
    font-size: 10px;
    font-weight: bold;
    color: white;
    background-color: ${props => props.editing ? '#33B44D' : '#101066'};
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 60px;

    &:hover {
        background-color: ${props => props.editing ? '#1C682C' : '#09093A'};
    }

    &:focus {
        outline: none;
    }
`;

export const Container = styled.div`
    background-color: white;
    margin-top: 50px;
    border-radius: 20px;
    padding: 20px;
    width: 650px;
    height: 480px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    p {
        font-size: 12px;
    }

    @media (max-width: 900px) {
        width: 100%;
        height: auto;
        margin-top: 0;
        margin-bottom: 10px;
    }
`;