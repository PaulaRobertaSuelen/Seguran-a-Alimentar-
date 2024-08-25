import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    background-color: #d7eaf6;
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
`;
