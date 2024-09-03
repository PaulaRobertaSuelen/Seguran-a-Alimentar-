import styled from 'styled-components';

export const Footer = styled.footer`
    position: relative;
    background-color: #7499e8;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    width: 100%;
    height: auto;
    > img {
        width: 70px;
        height: 70px;
        position: absolute;
        left: 150px;
        @media (max-width: 900px) {
            position: initial;
        }
    }
    > .email {
        font-size: 0.8rem;
        color: '#101066';
        > span {
            font-weight: 600;
        }
    }
    > .copyright {
        width: 80%;
        color: #222;
        font-size: 0.6rem;
        text-align: center;
    }
    > .icons {
        display: flex;
        gap: 10px;
    }

    & a {
        display: flex;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        color: #333;
        &:hover {
      color: #000; /* Cor mais escura ao passar o mouse */
      text-decoration: underline; /* Sublinhado ao passar o mouse */
    }
    }
    
  `;

export const Button = styled.button`
    position: absolute;
    right: 100px;
    top: -40px;
    background-color: #2727e8;
    width: 50px;
    height: 50px;
    color: white;
    border-radius: 5px;
    outline: 0;
    border: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px rgb(0, 0, 0, 0.3);
    transition: ease background-color 250ms;
    &:hover {
        background-color: #101066;
    }
    &:active {
        background-color: #2764e8;
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
    @media (max-width: 900px) {
            display: none;
        }
`;

