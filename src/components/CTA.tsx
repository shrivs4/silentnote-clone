import { Box, Button, Container, Typography } from "@mui/material";

export default function CTA() {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #5B4CF7 0%, #6D5CFF 35%, #4E42F3 100%)",
        color: "white",
        minHeight: { md: "calc(100vh - 88px)" },
        display: "flex",
        alignItems: "center",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ fontSize: { xs: 42, md: 74 }, lineHeight: 1.05 }}>
            Ready to upgrade your meetings?
          </Typography>

          <Typography sx={{ mt: 2, opacity: 0.9, fontSize: 18 }}>
            Join 10,000+ professionals who save 5 hours a week with SilentNote.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 4,
              bgcolor: "white",
              color: "#5B4CF7",
              px: 3.5,
              py: 1.7,
              "&:hover": { bgcolor: "rgba(255,255,255,.92)" },
            }}
          >
            Add to Chrome - It&apos;s Free
          </Button>

          <Typography sx={{ mt: 2, opacity: 0.8, fontSize: 14 }}>
            No credit card required · Cancel anytime
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
