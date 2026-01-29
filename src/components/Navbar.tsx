import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Typography, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme as useCustomTheme } from "../contexts/ThemeContext";

const Logo = () => (
  <Stack direction="row" spacing={1.2} alignItems="center">
    <Box
      sx={{
        width: 42,
        height: 42,
        borderRadius: 3,
        bgcolor: "primary.main",
        display: "grid",
        placeItems: "center",
        boxShadow: "0 16px 30px rgba(91,76,247,.25)",
      }}
    >
      <Box
        sx={{
          width: 18,
          height: 14,
          borderRadius: 2,
          bgcolor: "white",
          position: "relative",
          "&:after": {
            content: '""',
            position: "absolute",
            left: 4,
            bottom: -3,
            width: 7,
            height: 7,
            bgcolor: "white",
            transform: "rotate(45deg)",
            borderRadius: 1,
          },
        }}
      />
    </Box>
    <Typography sx={{ fontWeight: 800, fontSize: 22, color: "primary.main" }}>
      SilentNote
    </Typography>
  </Stack>
);

export default function Navbar() {
  const { mode, toggleTheme } = useCustomTheme();
  const theme = useTheme();

  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        bgcolor: theme.palette.mode === "dark" ? "rgba(20, 27, 45, 0.8)" : "rgba(255,255,255,.70)",
        backdropFilter: "blur(10px)",
        borderBottom: theme.palette.mode === "dark" ? "1px solid rgba(255,255,255,.08)" : "1px solid rgba(11,18,32,.06)",
      }}
    >
      <Toolbar disableGutters sx={{ py: 1 }}>
        <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Logo />

          {/* <Stack direction="row" spacing={4} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography color="text.secondary" sx={{ fontWeight: 600 }}>Product</Typography>
            <Typography color="text.secondary" sx={{ fontWeight: 600 }}>Pricing</Typography>
            <Typography color="text.secondary" sx={{ fontWeight: 600 }}>Resources</Typography>
          </Stack> */}

          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: "text.secondary",
                "&:hover": { bgcolor: "rgba(91,76,247,.08)" },
              }}
              aria-label="toggle theme"
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <Button
              variant="text"
              sx={{
                color: "text.secondary",
                fontWeight: 600,
                display: { xs: "none", sm: "block" },
                "&:hover": { bgcolor: "rgba(91,76,247,.08)" },
              }}
              disabled
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                px: 2.4,
                py: 1.1,
                boxShadow: "0 18px 40px rgba(91,76,247,.25)",
              }}
            >
              Add to Chrome - It&apos;s Free
            </Button>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
