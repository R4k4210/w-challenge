import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    disabled: Palette["primary"];
  }

  interface PaletteOptions {
    disabled?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    disabled?: string;
  }

  interface SimplePaletteColorOptions {
    disabled?: string;
  }

  interface BreakpointOverrides {
    xxl: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#9b4a67",
      main: "#502f54",
      dark: "#0e152c",
      contrastText: "#fdb05e",
      disabled: "#c4c4c4",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000000DE",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1358,
      xl: 1530,
      xxl: 1920,
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 16,
    h1: {
      fontSize: 48,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 32,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 24,
      fontWeight: "bold",
    },
    h4: {
      fontSize: 20,
      fontWeight: "bold",
    },
    h5: {
      fontSize: 16,
    },
  },
});

export default theme;
