import styled from 'styled-components';

export const img = styled.img`
    position: absolute;
    width: 100%;
    height: 140%;
    background-image: url(/src/assets/svg/ondaleve.svg);
    background-size: cover;
    z-index: -1;

    @media (max-width: 900px) {
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;

  @media (max-width: 900px) {
    padding: 0 10px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  margin-left: -370px;

  @media (max-width: 900px) {
    margin-left: 0;
    text-align: center;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;

  @media (max-width: 900px) {
    padding: 0 10px;
  }
`;

export const ListItem = styled.li`
  list-style-type: disc;
  margin-left: -240px;
  text-align: justify;
  list-style: none;

  @media (max-width: 900px) {
    margin-left: 0;
    text-align: center;
  }

  span {
        font-weight: bold;
    }
`;

 export const Image = styled.img`
  width: 65%;
  max-width: 950px;
  margin-bottom: 20px;
  margin-top: 20px;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 900px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const CardButton = styled.button`
  background-color: #33B44D;
  color: #fff;
  padding: 2px 10px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-top: -5px;
  max-width: 110px;

  @media (max-width: 900px) {
    padding: 5px 15px;
    font-size: 14px;
  }
`;

export const SectionTitleT = styled.h1`
    font-size: 13px;
    font-weight: bold;
    color: #3771C8;
    margin-left: -425px;
    flex-direction: column;

    @media (max-width: 900px) {
    margin-left: 0;
    text-align: center;
    font-size: 10px;
  }
`;

export const formBTT = styled.form`
    background-color: #33B44D;
  color: #fff;
  padding: 3px 5px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-top: -30px;

  @media (max-width: 900px) {
    padding: 10px 20px;
  }
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

  @media (max-width: 900px) {
    display: none;
  }
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

  @media (max-width: 900px) {
    display: none;
  }
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

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Image2 = styled.img`
    width: 100%;
    margin-top: -5px;

    @media (max-width: 900px) {
    margin-top: 0;
  }
`;