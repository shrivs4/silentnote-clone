import { Box, Container, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

function PainCard({
  tone,
  title,
  body,
}: {
  tone: "bad" | "good";
  title: string;
  body: string;
}) {
  const isBad = tone === "bad";

  return (
    <Box
      className="sn-soft-card"
      sx={{
        borderRadius: 3,
        p: 3.5,
        minHeight: { xs: 180, md: 220 }, // ⬅ increased height
        bgcolor: isBad ? "rgba(255, 90, 90, .08)" : "rgba(91, 76, 247, .08)",
        border: isBad
          ? "1px solid rgba(255, 90, 90, .18)"
          : "1px solid rgba(91, 76, 247, .18)",
      }}
    >
      <Box
        sx={{
          width: 42,
          height: 42,
          borderRadius: 2.5,
          bgcolor: isBad ? "rgba(255, 90, 90, .14)" : "rgba(91, 76, 247, .14)",
          display: "grid",
          placeItems: "center",
          mb: 2,
        }}
      >
        {isBad ? (
          <CloseRoundedIcon sx={{ color: "#FF3B30" }} />
        ) : (
          <CheckRoundedIcon sx={{ color: "#5B4CF7" }} />
        )}
      </Box>

      <Typography
        sx={{
          fontWeight: 800,
          fontSize: 20,
          mb: 1,
          color: isBad ? "#7A0D10" : "text.primary", // ⬅ dark-mode safe
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: isBad ? "#B4232A" : "text.secondary",
          lineHeight: 1.7,
          fontSize: 15,
        }}
      >
        {body}
      </Typography>
    </Box>
  );
}

export default function PainSection() {
  return (
    <Box
      sx={{
        minHeight: { md: "calc(100vh - 88px)" }, // ⬅ full screen
        display: "flex",
        alignItems: "center",
        py: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: 32, md: 48 }, lineHeight: 1.05, fontWeight: 800 }}
          >
            You&apos;re in back-to-back meetings all day
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              color: "text.secondary",
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.7,
              maxWidth: 820,
              mx: "auto",
            }}
          >
            By 5pm, you can barely remember what you committed to in your morning standup.
            Important details slip through cracks. You miss follow-ups. Clients notice.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2.5,
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <PainCard
              tone="bad"
              title='The "Bot" Problem'
              body='Traditional tools send a bot named "Notetaker" that joins your call. It’s awkward, signals you’re not paying attention, and makes guests uncomfortable.'
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <PainCard
              tone="good"
              title="The SilentNote Way"
              body="SilentNote runs locally in your browser. No bots. No recording notifications. Just you, fully present, while AI captures everything silently."
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
