import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    ${(props) => props.styles}
`;

export const Label = styled.label`
    margin-bottom: 4px;
    font-size: 12px;
    color: #333;
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 8px;
    &:focus-within {
        border-color: #007bff;
    }
`;

export const Icon = styled.span`
    margin: 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: none;
    outline: none;
    flex: 1;
    padding: 4px;
    font-size: 14px;
    background-color: #f9f9f9;
`;
