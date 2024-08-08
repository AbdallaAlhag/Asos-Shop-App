import styled from "styled-components";

const Input = styled.input`
  all: unset;

  box-sizing: border-box;
  width: 96.5%;
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
export const TempDiv = styled.div`
  width: 100%;
`;
export const SuggestionList = styled.ul`
  color: black;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  width: 41.5%;
  z-index: 1000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  top: 100px; /* Adjust this value to control the dropdown's vertical 
  position */
  left: 575px;
`;

export const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
  &:focus {
    background-color: #e0e0e0;
    outline: none;
  }
`;

export { Input };
