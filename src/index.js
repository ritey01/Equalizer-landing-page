import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Theme from "./themes/theme";

const GlobalStyle = createGlobalStyle`
 * {
  box-sizing:border-box;
}

body {
  padding:0;
  
  min-height: 100vh;
  font-family: 'IBM Plex Sans', sans-serif;

  margin: 0 auto;
  @media(min-width: 1430px  ){
    
  }
 
}


svg {
  display: block;
  max-width: 100%;
}
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
