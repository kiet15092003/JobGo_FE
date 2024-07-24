import { createTheme, SimplePaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    myTextColor: SimplePaletteColorOptions;
  }
  interface PaletteOptions {
    myTextColor?: SimplePaletteColorOptions;
  }
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#7e57c2",
      dark: "#4527a0",
      light: "#7e57c2",
    },

    text: {
      primary: "#455a64", 
    },

    myTextColor:{
      main: "#455a64",
      light: "#A0B3C6",
    }
  }
});

export default customTheme;