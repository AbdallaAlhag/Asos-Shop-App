// src/GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import futur from "../assets/futur.ttf";

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
    @font-face {
    font-family: 'Futura';
    src: url(${futur}) format('ttf'),
    font-weight: normal;
    font-style: normal;
  }
    
  /* Base Styles */
  body, html, #root {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: 'Futur', 'Trebuchet MS', Arial, sans-serif;
    background-color: #ffffff;
    color: #333;
    overflow-x: hidden;
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
