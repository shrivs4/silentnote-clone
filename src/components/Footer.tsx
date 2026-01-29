import { Box, Container, Grid, Stack, Typography, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: theme.palette.mode === "dark" ? "rgba(20, 27, 45, 0.5)" : "#F6F7FB",
        borderTop: theme.palette.mode === "dark" ? "1px solid rgba(255,255,255,.08)" : "1px solid rgba(11,18,32,.06)",
        py: 6,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* @ts-ignore - MUI v7 Grid type issue */}
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
                SilentNote
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Bot-free meeting transcription for professionals who value privacy and focus.
              </Typography>
            </Stack>
          </Grid>

          {/* @ts-ignore - MUI v7 Grid type issue */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ fontWeight: 900, mb: 1.5 }}>Product</Typography>
            <Stack spacing={1} color="text.secondary">
              <Typography>Features</Typography>
              <Typography>Pricing</Typography>
              <Typography>Security</Typography>
            </Stack>
          </Grid>

          {/* @ts-ignore - MUI v7 Grid type issue */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ fontWeight: 900, mb: 1.5 }}>Resources</Typography>
            <Stack spacing={1} color="text.secondary">
              <Typography>Blog</Typography>
              <Typography>Community</Typography>
              <Typography>Help Center</Typography>
            </Stack>
          </Grid>

          {/* @ts-ignore - MUI v7 Grid type issue */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ fontWeight: 900, mb: 1.5 }}>Legal</Typography>
            <Stack spacing={1} color="text.secondary">
              <Typography>Privacy Policy</Typography>
              <Typography>Terms of Service</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
