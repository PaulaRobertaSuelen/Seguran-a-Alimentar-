import styled from 'styled-components';

export const PageWrapper = styled.div`
    background: url(${(props) => props.backgroundImage}) no-repeat center center;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
    background-size: cover;
`;

export const Container = styled.div`
    display: flex;
    padding: 0 300px;
    column-gap: 20px;

    @media (max-width: 900px) {
        padding: 0;
        margin: 0 5px;
        display: flex;
        flex-direction: column;
        padding: 0;
        gap: 15px;
    }
`;
