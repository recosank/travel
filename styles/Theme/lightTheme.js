import { createTheme } from "@mui/material/styles";

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
});

export default lightTheme;
