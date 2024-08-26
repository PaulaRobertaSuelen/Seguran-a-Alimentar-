import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const Header = styled.header`
  justify-content: space-between;
  color: black;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  font-family: sans-serif;

  h1 {
    margin: 0;
  }
`;

export const Main = styled.main`
  padding: 20px 0;
`;

export const Section = styled.section`
  margin-bottom: 20px;

  h2, h3, h4 {
    color: #007bff;
  }
`;

export const ImageContainer = styled.div`
  margin-left: 34%;
  img {
    width: 50%;
    height: 50%;
  }
`;

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin: 5px 0;
  }
`;

export const FooterStyled = styled.footer`
  margin: 5px 0;
  padding: 15px;
  color: black;
  border-radius: 5px;
`;

export const datapubli = styled.p`
  
`;