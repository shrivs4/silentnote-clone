import {
  Box,
  Chip,
  Container,
  Link,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function FeatureRow({
  badge,
  title,
  desc,
  bullets,
  chips,
  linkText,
  image,
  flip,
}: {
  badge: string;
  title: string;
  desc: string;
  bullets?: string[];
  chips?: string[];
  linkText?: string;
  image: string;
  flip?: boolean;
}) {
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: flip ? "row-reverse" : "row" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 1 50%" }, width: { xs: "100%", md: "50%" } }}>
          <Box className="sn-glow" sx={{ position: "relative" }}>
            <Box
              className="sn-soft-card"
              sx={{
                position: "relative",
                zIndex: 1,
                borderRadius: 7,
                p: 2,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                  width: "100%",
                  height: { xs: 280, md: 360 },
                  objectFit: "cover",
                  borderRadius: 6,
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: { xs: "1 1 100%", md: "0 1 50%" }, width: { xs: "100%", md: "50%" } }}>
          <Chip
            label={badge}
            icon={<span />}
            sx={{
              mb: 2,
              bgcolor: "rgba(91,76,247,.10)",
              color: "primary.main",
              border: "1px solid rgba(91,76,247,.18)",
              fontWeight: 800,
              borderRadius: 999,
            }}
          />

          <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 48 }, lineHeight: 1.1 }}>
            {title}
          </Typography>

          <Typography sx={{ mt: 2, color: "text.secondary", fontSize: 18, lineHeight: 1.8 }}>
            {desc}
          </Typography>

          {bullets?.length ? (
            <List sx={{ mt: 2 }}>
              {bullets.map((b) => (
                <ListItem key={b} disableGutters sx={{ py: 0.8 }}>
                  <ListItemIcon sx={{ minWidth: 34 }}>
                    <CheckCircleRoundedIcon sx={{ color: "#1DB954" }} />
                  </ListItemIcon>
                  <Typography sx={{ fontWeight: 700 }}>{b}</Typography>
                </ListItem>
              ))}
            </List>
          ) : null}

          {chips?.length ? (
            <Stack direction="row" spacing={1.2} sx={{ mt: 2, flexWrap: "wrap" }}>
              {chips.map((c) => (
                <Chip
                  key={c}
                  label={c}
                  sx={{
                    mb: 1,
                    bgcolor: "rgba(11,18,32,.04)",
                    border: "1px solid rgba(11,18,32,.06)",
                    fontWeight: 700,
                  }}
                />
              ))}
            </Stack>
          ) : null}

          {linkText ? (
            <Link
              href="#"
              underline="none"
              sx={{ mt: 2.5, display: "inline-flex", alignItems: "center", gap: 1, fontWeight: 800 }}
            >
              {linkText} <ArrowForwardRoundedIcon />
            </Link>
          ) : null}
        </Box>
        </Box>
      </Container>
    </Box>
  );
}
