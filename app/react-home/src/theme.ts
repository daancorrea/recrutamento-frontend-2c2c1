import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: grey[200],
    },
    secondary: {
      main: "#212121",
    },
    error: {
      main: red.A400,
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
