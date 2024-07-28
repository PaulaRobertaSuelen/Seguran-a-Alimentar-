import styled from "styled-components";

const SFooter = styled.footer`
  background-color: #27dee8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
  font-size: 11px;
  color: #222;
  > img {
    width: 50px;
    height: 50px;
  }
`;

const SButton = styled.button`
  background-color: #33b44d;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgb(0, 0, 0, 0.3);
  transition: ease background-color 250ms;
  &:hover {
    background-color: #49b533;
  }
  &:active {
    background-color: #33b579;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export { SFooter, SButton };
