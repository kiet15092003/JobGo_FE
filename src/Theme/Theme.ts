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
      main: "#1e88e5",
      dark: "#05264E",
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