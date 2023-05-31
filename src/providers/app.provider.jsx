import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Create your custom theme
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#576166", // Your custom primary color for dark mode
    },
  },
});

// AppProvider component
const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
