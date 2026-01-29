import { Box, Container } from "@mui/material";
import React from "react";

export default function SectionShell({
  children,
  py = 10,
}: {
  children: React.ReactNode;
  py?: number;
}) {
  return (
    <Box sx={{ py: { xs: py * 0.65, md: py } }}>
      <Container>{children}</Container>
    </Box>
  );
}
