import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import GlobalStyles from "./components/GlobalStyles"
import { ThemeProvider } from 'styled-components';
import { theme } from "./styles/theme";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyles />
  </StrictMode>
);
