import styled from "styled-components";

const Input = styled.input`
  all: unset;

  box-sizing: border-box;
  width: 100%;
  height: 50%;
  margin: auto 15px;

  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 16px;
  background-color: white;
  color: black;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export { Input };
