import styled from 'styled-components';

const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    z-index: 1000;
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    background-color: #deedf5;
    border-radius: 8px;
    color: black;
    max-height: 90vh;
    overflow: auto;
`;

const Button = styled.button`
    position: absolute;
    border: none;
    border-radius: 50px;
    background: none;
    top: 0;
    right: 0;
    margin: 10px;
    padding: 5px;
    & :hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    & .close {
        color: rgba(0, 0, 0, 0.7);
        border-radius: 50px;
        font-size: 16px;
    }
`;

export { Background, Modal, Button };
