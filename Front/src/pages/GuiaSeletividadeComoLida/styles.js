import styled from 'styled-components';

export const body = styled.div`
    background-image: url('/src/assets/svg/ondaleve.svg');
    background-size: cover;
    background-position: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  margin-top: -900px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  margin-left: -360px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style-type: disc;
  margin-left: -240px;
  text-align: justify;
  list-style: none;
  span {
        font-weight: bold;
    }
`;

 export const Image = styled.img`
  width: 100%;
  max-width: 950px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardButton = styled.button`
  background-color: #33B44D;
  color: #fff;
  padding: 2px 10px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-top: -50px;
  max-width: 120px;
`;

export const SectionTitleT = styled.h1`
    font-size: 13px;
    font-weight: bold;
    color: #3771C8;
    margin-left: -560px;
    flex-direction: column;
`;

export const formBTT = styled.form`
    background-color: #33B44D;
  color: #fff;
  padding: 3px 5px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-top: -55px;
`;

export const CardETM = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  //border: 1px solid #ddd;
  //border-radius: 5px;
  //margin-bottom: 20px;
  //background-color: #fff;
  margin-left: 900px;
  margin-top: -800px;
  max-width: 250px;
`;

export const CardPP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  //border: 1px solid #ddd;
  //border-radius: 5px;
  //margin-bottom: 20px;
  //background-color: #fff;
  margin-left: 900px;
  margin-top: 50px;
  max-width: 250px;
`;

export const CardSA = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  //border: 1px solid #ddd;
  //border-radius: 5px;
  //margin-bottom: 20px;
  //background-color: #fff;
  margin-left: 900px;
  margin-top: 50px;
  max-width: 250px;
`;