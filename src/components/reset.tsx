import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
  }

  html {
    font-size: 62.5%;
  }

  body {
    h1 , h2, h3 h4 , button {
    font-weight: 700;
  }
    p, h5 {
      font-weight: 400;
    }
  }
`;

export default GlobalStyle;
