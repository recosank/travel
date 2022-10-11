import { createTheme, ThemeProvider } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  tr: {
    background: "white",
    "&:hover": {
      background: "white",
    },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
});

export default lightTheme;
