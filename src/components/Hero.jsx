// Hero.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url('https://files.grupogarruz.com.mx/images/hero2.jpg')`,
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2" align="center">
        Innovative Materials for the Future
      </Typography>
    </Box>
  );
};

export default Hero;
