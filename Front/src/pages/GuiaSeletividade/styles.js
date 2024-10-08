import styled from 'styled-components';

export const img = styled.img`
    position: absolute;
    width: -400px;
    height: -500px;
    background-image: url(/src/assets/svg/ondaleve.svg);
    background-size: cover;
    z-index: -1;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
`;

export const Paragraph = styled.p`
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
    margin-right: 340px;

    @media (max-width: 900px) {
        margin-left: 0;
        text-align: center;
    }
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
`;

export const ListItem = styled.li`
    list-style-type: disc;
    margin-right: 210px;
    text-align: justify;
    list-style: none;

    @media (max-width: 900px) {
        margin-left: 0;
        text-align: left;
    }
    span {
        font-weight: bold;
    }
`;

export const Image = styled.img`
    width: 850px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 20px;

    @media (max-width: 900px) {
        width: 100px;
    }
`;

export const CardTitle = styled.h4`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const CardButton = styled.button`
    background-color: #33b44d;
    color: #fff;
    padding: 2px 10px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    margin-top: -5px;
    max-width: 110px;
`;

export const SectionTitleT = styled.h1`
    font-size: 13px;
    font-weight: bold;
    color: #3771c8;
    margin-right: 395px;
    flex-direction: column;

    @media (max-width: 900px) {
        margin-left: 0;
        text-align: center;
    }
`;

export const formBTT = styled.form`
    background-color: #33b44d;
    color: #fff;
    padding: 3px 5px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    margin-top: -30px;
`;

export const CardETM = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-left: 820px;
    margin-top: -950px;
    max-width: 250px;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const CardPP = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-left: 820px;
    margin-top: 50px;
    max-width: 250px;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const CardSA = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-left: 820px;
    margin-top: 50px;
    max-width: 250px;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const Image2 = styled.img`
    width: 210px;
    margin-top: -5px;
`;