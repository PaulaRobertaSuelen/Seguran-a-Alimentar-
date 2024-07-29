import styled from "styled-components";

export const Container = styled.div`
  & .enter-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  & img {
    max-width: 300px;
    max-height: 300px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  & h1 {
    color: #44b2f0;
    text-align: center;
  }
  & p {
    text-align: justify;
    font-weight: 500;
    max-width: 40vw;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;
