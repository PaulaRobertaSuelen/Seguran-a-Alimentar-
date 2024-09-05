import styled from 'styled-components';



export const img = styled.img`
    position: absolute;
    width: 100px;
    height: 140px;
    background-image: url(/src/assets/svg/ondaleve.svg);
    background-size: cover;
    z-index: -1;

    @media (max-width: 900px) {
    height: 100px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;

  Footer {
    top: 0px;
    top: 0px;
  };

  @media (max-width: 900px) {
    padding: 0 10px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: -320px;

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
  margin-left: -280px;
  text-align: justify;

  @media (max-width: 900px) {
    margin-left: 0;
    text-align: center;
  }
`;

 export const Image = styled.img`
  width: 650px;
  max-width: 950px;
  margin-bottom: 20px;
  margin-top: 20px;

  @media (max-width: 900px) {
    width: 100px;
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
  margin-top: 0px;
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
    margin-left: -470px;
    flex-direction: column;

    @media (max-width: 900px) {
    margin-left: 0;
    text-align: center;
  }
`;

export const SectionTitleT2 = styled.h1`
    font-size: 13px;
    color: #3771C8;
    margin-left: -280px;

    @media (max-width: 900px) {
    margin-left: 0;
    text-align: center;
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

export const SectionTitleFT = styled.p`
    font-size: 13px;
    font-weight: bold;
    color: #3771C8;
    margin-left: -280px;
    font-size: large;

    @media (max-width: 900px) {
    margin-left: 0;
    text-align: center;
  }
`;

export const CardETM = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-left: 850px;
  margin-top: -1600px;
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
  border-radius: 5px;
  margin-bottom: 10px;
  margin-left: 850px;
  margin-top: 20px;
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
  border-radius: 5px;
  margin-bottom: 20px;
  margin-left: 850px;
  margin-top: 20px;
  max-width: 250px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ImageCD = styled.img`
    width: 230px;
    margin-top: -5px;
`;