import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyles";
import App from "./App";
import theme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
