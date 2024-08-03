// src/pages/Redefinirsenha/styles.js
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
    position: absolute; /* Define o posicionamento absoluto */
    top: 20px; /* Distância do topo */
    left: 50px; /* Distância da esquerda */
    &:hover {
        background-color: #0056b3;
    }
`;

export default Botao;
