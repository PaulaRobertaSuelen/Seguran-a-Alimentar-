import styled from "styled-components";

export const Container = styled.div`
  > .main-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > .text-container h1 {
    color: #44b2f0;
    text-align: center;
  }
  > .text-container p {
    text-align: justify;
    font-weight: 500;
  }
  > .text-container img {
    max-width: 400px;
    max-height: 400px;
  }
`

export const Card = styled.div`
max-width: 60%;
`