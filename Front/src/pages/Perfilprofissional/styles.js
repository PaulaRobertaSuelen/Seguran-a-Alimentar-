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
    `;