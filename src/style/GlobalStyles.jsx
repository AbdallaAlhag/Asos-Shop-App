// src/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
:root {
    --link-hover: #0770cf;
    --button-hover: #1862a5;
  }
  /* Base Styles */
  body {
    font-family: 'Arial', sans-serif;
    background-color: #ffffff;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  img {
  max-width: 100%
  }
  /* Add any additional global styles here */
`;

export default GlobalStyle;
