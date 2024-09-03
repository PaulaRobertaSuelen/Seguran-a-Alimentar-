import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50px;
    background-color: #101066;
    color: white;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    margin-right: 20px;
    height: 480px;
    margin-bottom: 50px;

    @media (max-width: 900px) {
        margin-right: 0;
        margin-bottom: 0;
        width: 100%;
        height: auto;
    }
`;

export const Fotoprof = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    text-align: center;
`;

export const Nome = styled.text`
    font-size: 16px;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
`;

export const Especialidade = styled.text`
    font-size: 12px;
    font-weight: normal;
    color: white;
    margin-bottom: 10px;
`;

export const CRN = styled.text`
    font-size: 12px;
    font-weight: bold;
    color: white;
    margin-bottom: 30px;
`;

export const Botoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;

export const Contato = styled.button`
    background-color: #33b44d;
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
        background-color: #1c682c;
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TagInfo = styled.text`
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10px;
`;
