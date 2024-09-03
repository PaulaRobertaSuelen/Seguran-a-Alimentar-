import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    ${(props) => props.styles}
`;

export const Label = styled.label`
    margin-left: 8px;
    font-size: 14px;
    color: #333;
`;

export const Input = styled.input`
    width: 15px;
    height: 15px;
    cursor: pointer;
    background-color: #f9f9f9;
`;
