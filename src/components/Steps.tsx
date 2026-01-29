import { Box, Container, Typography, useTheme } from "@mui/material";

function StepCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  const theme = useTheme();

  return (
    <Box
      className="sn-soft-card"
      sx={{
        borderRadius: 7,
        p: 4,
        textAlign: "center",
        height: "100%", // ✅ make card fill grid row height
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        border:
          theme.palette.mode === "dark"
            ? "1px solid rgba(255,255,255,.08)"
            : "1px solid rgba(11,18,32,.06)",
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: 4,
          bgcolor: "primary.main",
          color: "white",
          display: "grid",
          placeItems: "center",
          mx: "auto",
          boxShadow: "0 18px 40px rgba(91,76,247,.25)",
          fontWeight: 900,
          fontSize: 20,
        }}
      >
        {n}
      </Box>

      <Typography sx={{ mt: 2.5, fontWeight: 900, fontSize: 22, color: "text.primary" }}>
        {title}
      </Typography>

      <Typography sx={{ mt: 1.2, color: "text.secondary", lineHeight: 1.8 }}>
        {desc}
      </Typography>
    </Box>
  );
}

export default function Steps() {
  return (
    <Box
      sx={{
        minHeight: { md: "calc(100vh - 88px)" },
        display: "flex",
        alignItems: "center",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: 38, md: 60 },
            lineHeight: 1.05,
            mb: 6,
            fontWeight: 900,
          }}
        >
          Get started in 2 minutes
        </Typography>

        {/* ✅ Guaranteed 3-up layout on desktop */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
            alignItems: "stretch", // ✅ equal height rows
          }}
        >
          <StepCard
            n="1"
            title="Add to Chrome"
            desc="Install the extension in one click. No credit card required."
          />
          <StepCard
            n="2"
            title="Join a Meeting"
            desc="Jump into Google Meet, Zoom, or Teams. SilentNote wakes up automatically."
          />
          <StepCard
            n="3"
            title="Get Your Notes"
            desc="Receive perfect notes and summaries instantly after the call ends."
          />
        </Box>
      </Container>
    </Box>
  );
}
