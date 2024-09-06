import styled from 'styled-components';

export const ConteinerModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    z-index: 1000;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ButaoBuscar = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ClaseButao = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 5px;
`;
