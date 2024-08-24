import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    margin-top: 50px;
    border-radius: 10px;
    padding: 20px;
    width: 500px;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
    border-bottom: 1px solid #ccc;
`;

export const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const ProfileInfo = styled.div`
    flex: 1;
    margin-left: 10px;
`;

export const ViewButton = styled.button`
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
`;
