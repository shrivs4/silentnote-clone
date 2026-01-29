import { createTheme } from "@mui/material/styles";

const PURPLE = "#5B4CF7";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: PURPLE },
    text: {
      primary: "#0B1220",
      secondary: "rgba(11, 18, 32, 0.65)",
    },
    background: {
      default: "#F7F8FC",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial",
    h1: { fontWeight: 800, letterSpacing: "-0.04em" },
    h2: { fontWeight: 800, letterSpacing: "-0.03em" },
    h3: { fontWeight: 800, letterSpacing: "-0.02em" },
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: { borderRadius: 18 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 14, paddingLeft: 18, paddingRight: 18 },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
    },
  },
});

export default theme;
