import styled from 'styled-components';

export const Footer = styled.footer`
    background-color: #7499E8;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    /* margin-top: 8px; */
    font-size: 10px;
    width: 100%;
    height: 100px;
    color: #222;
    > img {
        width: 50px;
        height: 50px;
        
    }
    & p {
        display: flex;
        align-items: center;
        padding-right: 30px;
       
    }
`;

export const Button = styled.button`
    background-color: #2727E8;
    width: 60px;
    height: 60px;
    color: white;
    padding: 5px 15px;
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
        background-color: #2764E8;
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;
export const  Arrow = styled.div`
    

`;
