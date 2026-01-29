import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

const PURPLE = "#5B4CF7";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("dark"); // Default to dark

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setMode(saved);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: { main: PURPLE },
      text: {
        primary: mode === "dark" ? "#FFFFFF" : "#0B1220",
        secondary: mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(11, 18, 32, 0.65)",
      },
      background: {
        default: mode === "dark" ? "#0A0E1A" : "#F7F8FC",
        paper: mode === "dark" ? "#141B2D" : "#FFFFFF",
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
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "rgba(20, 27, 45, 0.8)" : "rgba(255,255,255,.70)",
            borderBottom: mode === "dark" ? "1px solid rgba(255,255,255,.08)" : "1px solid rgba(11,18,32,.06)",
          },
        },
      },
    },
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
