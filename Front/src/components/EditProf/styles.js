import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    margin-top: 50px;
    border-radius: 10px;
    padding: 20px;
    width: 650px;
    height: 480px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    p {
        margin-top: 10px;
        font-size: 14px;
    }
    h2{
        font-size: 20px;
        margin-top: 10px;
    }
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
export const EditButton =styled.button`
    margin-left: 80%;
    background-color: transparent;
    border: '2px solid #000';
    color: '#000';
    padding: '10px 20px';
    font-size: 13px;
    border-radius: 10px;
    cursor: pointer;
`;
export const ViewButton = styled.button`
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
`;