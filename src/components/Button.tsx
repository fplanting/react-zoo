import styled from "styled-components";

export const Button = styled.button`
    padding: 5px 10px 5px 10px;
    margin-bottom: 10px;
    border-radius: 1em;
    text-decoration: none;
    font-family: "Karla", sans-serif;
    font-weight: 300;
    background-color: #fff;
    border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  :hover {
      background-color: #b8a076;
  }

  :disabled {
    box-shadow: none;
    background-color: #c5b69a;
    color: #81817f;
  }
`;