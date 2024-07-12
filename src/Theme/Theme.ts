import { createTheme, ThemeOptions } from "@mui/material";
import { PaletteColorOptions, PaletteOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    myTextColor: PaletteColorOptions;
  }
  interface PaletteOptions {
    myTextColor?: PaletteColorOptions;
  }
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1e88e5",
      dark: "#1a237e",
      light: "#7e57c2",
      //contrastText:"#37474f"
    },

    text: {
      primary: "#455a64", 
      //secondary: "#eceff1", 
    },

    myTextColor:{
      main: "#455a64",
      light: "#eceff1",

    }
  }
});

export default customTheme;