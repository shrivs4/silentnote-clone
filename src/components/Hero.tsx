import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";

export default function Hero() {
  return (
    <Box
      sx={{
        pt: { xs: 2, md: 3 },   // ⬅ reduced
        pb: { xs: 2, md: 3 },   // ⬅ reduced
        minHeight: { md: "calc(100vh - 88px)" },
        display: { md: "flex" },
        alignItems: { md: "center" },
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 5 }}
          alignItems="center"
        >
          {/* LEFT CONTENT */}
          <Box sx={{ flex: 1 }}>
            <Chip
              label="✨ New: GPT-4o Integration"
              sx={{
                mb: 2,
                px: 1.2,
                py: 2,
                borderRadius: 999,
                bgcolor: "rgba(91,76,247,.08)",
                border: "1px solid rgba(91,76,247,.18)",
                color: "primary.main",
                fontWeight: 700,
              }}
            />

            <Typography
              variant="h1"
              sx={{ fontSize: { xs: 44, md: 72 }, lineHeight: 0.95 }}
            >
              Never take <br />
              meeting <span style={{ color: "#5B4CF7" }}>notes</span> <br />
              again
            </Typography>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 520,
                fontSize: 17,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              Real-time transcription, AI summaries, and action items from every
              Google Meet, Zoom, and Teams call—without an awkward bot joining
              your meeting.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Button
                variant="contained"
                sx={{
                  px: 3,
                  py: 1.4,
                  boxShadow: "0 18px 44px rgba(91,76,247,.25)",
                }}
              >
                Interested
              </Button>

              <Button
                variant="outlined"
                startIcon={<PlayArrowRoundedIcon />}
                sx={{
                  px: 2.6,
                  py: 1.4,
                  borderColor: "rgba(11,18,32,.25)",
                  color: "#0B1220",
                  bgcolor: "rgba(255,255,255,.6)",
                }}
              >
                Watch 60s Demo
              </Button>
            </Stack>

            <Stack direction="row" spacing={3} sx={{ mt: 3, color: "text.secondary" }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <CheckCircleRoundedIcon sx={{ fontSize: 18, color: "#1DB954" }} />
                <Typography sx={{ fontWeight: 600 }}>No bot joins</Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <VerifiedUserRoundedIcon sx={{ fontSize: 18, color: "primary.main" }} />
                <Typography sx={{ fontWeight: 600 }}>SOC 2 Certified</Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <TranslateRoundedIcon sx={{ fontSize: 18, color: "primary.main" }} />
                <Typography sx={{ fontWeight: 600 }}>60+ Languages</Typography>
              </Stack>
            </Stack>
          </Box>

          {/* RIGHT IMAGE */}
          <Box className="sn-glow" sx={{ flex: 1, width: "100%", position: "relative" }}>
            <Box
              className="sn-soft-card"
              sx={{
                position: "relative",
                zIndex: 1,
                borderRadius: 6,
                overflow: "hidden",
                p: 1,
              }}
            >
              <Box
                component="img"
                src="/hero.png"
                alt="Hero"
                sx={{
                  width: "100%",
                  height: { xs: 220, md: 360 },
                  objectFit: "cover",
                  borderRadius: 5,
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
