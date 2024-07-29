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
  justify-content: space-between;
  align-items: center;
  & img {
    max-width: 400px;
    max-height: 400px;
  }
`;

export const TextContainer = styled.div`
  max-width: 60%;
  & h1 {
    color: #44b2f0;
    text-align: center;
  }
  & p {
    text-align: justify;
    font-weight: 500;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;
