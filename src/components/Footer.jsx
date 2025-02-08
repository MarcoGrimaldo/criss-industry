// Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#333", color: "white", padding: "20px" }}>
      <Typography variant="body1" align="center">
        © 2025 Grupo Garraz. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
