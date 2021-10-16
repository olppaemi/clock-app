import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { AppContextProvider } from "contexts/AppContext";
import GlobalStyle from "styles/globalStyles";
import theme from "styles/theme";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <GlobalStyle />
        <App />
      </AppContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
