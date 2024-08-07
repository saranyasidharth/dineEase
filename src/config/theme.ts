import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#acacbb",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#fdfdfd",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "#fdfdfd",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 500,
      color: "#acacbb",
    },
    h6: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      color: "#acacbb",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  spacing: 8,
});

export default theme;
