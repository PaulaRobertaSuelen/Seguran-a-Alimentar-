import styled from 'styled-components';

const Botao = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 5px 25px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #0056b3;
    }
`;

export default Botao;