import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .div, #__next{
    height: 100%;
  }

  * { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';}
  a { cursor: pointer; text-decoration: none; }
  p {margin : 0}
`;
