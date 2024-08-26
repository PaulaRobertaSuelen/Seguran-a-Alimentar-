import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50px;
    background-color: #122670;
    color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
`;

export const Info = styled.div`
    margin: 15px 0;
    font-size: 18px;
    text-align: center;

    p {
        margin: 30px 0;
    }
`;

export const LogoutButton = styled.button`
    background-color: #f2545b;
    margin-left: 120px;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 20px;
    cursor: pointer;
`;
