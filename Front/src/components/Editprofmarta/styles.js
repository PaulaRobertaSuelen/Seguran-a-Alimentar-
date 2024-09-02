import styled from 'styled-components';

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
        margin-top: 2px;
        font-size: 12px;
        margin-bottom: 20px;
    }
    h2 {
        font-size: 16px;
        margin-top: 5px;
        font-weight: bold;
    }
`;
