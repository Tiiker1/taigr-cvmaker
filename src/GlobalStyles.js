// src/App.js (or a dedicated GlobalStyles.js)
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #121212;
    color: #fff;
    font-family: Arial, sans-serif;
  }

  @media print {
    @page {
      size: A4;
      margin: 0;
    }
    body {
      margin: 0;
    }
    #root > div {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    div {
      background: #fff;
      color: #000;
    }
  }
`;

export default GlobalStyle;
