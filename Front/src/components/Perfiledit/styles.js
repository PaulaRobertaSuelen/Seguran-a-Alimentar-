import styled from 'styled-components';


export const Container = styled.div`
    margin-top: 50px;
    background-color: #122670;
    color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    margin-right: 20px;
    height: 480px;
    gap: 0.5px;
    font-size: 12px;
`;

export const Fotoprof = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
`;

export const Info = styled.div`
    margin: 8px 0;
    text-align: center;

    p {
        margin: 20px 0;
        /* font-size: 20px; */
    }
`;

export const ContratarButton  = styled.button`
    background-color: #33B44D;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px 60px;
    cursor: pointer;
    margin-top: 20px;
`;

export const ConfgButton = styled.button`
    background-color: #7499E8;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px 60px;
    cursor: pointer;

`
