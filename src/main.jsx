import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme/Theme";

import CabinSketch from "./assets/fonts/CabinSketch-Regular.ttf";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: CabinSketch;
    src: url('${CabinSketch}') format('opentype');
  }
  
  #root {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    //background: radial-gradient(circle at bottom center, #212121 0%, #101010 80%);
    background: linear-gradient(#212121 0%, #101010 80%);
  }
  body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    //background-color: #F1F1F1;

 /*   * {
      outline: 1px solid red;

    }*/

    *, *:before, *:after {
      box-sizing: border-box;
    }

  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>,
);
