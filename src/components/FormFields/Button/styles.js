import styled from "styled-components";

const SButton = styled.button`
  background-color: #33b44d;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
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

export { SButton };
