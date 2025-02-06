import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        px: 2,
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Keeps video in the background
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay (Filter) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay (adjust opacity)
          zIndex: 0, // Ensures it's above the video but below content
        }}
      />

      {/* Title */}
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          borderRadius: "0px",
          position: "relative",
          zIndex: 1, // Keeps it above the overlay
        }}
      >
        GRUPO GARRUZ
      </Typography>

      {/* Button Grid */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ maxWidth: "80%", position: "relative", zIndex: 1 }}
      >
        {[
          { id: "concretos", title: "Concretos" },
          { id: "agregados", title: "Agregados" },
          { id: "asfaltos", title: "Asfaltos" },
          { id: "suelos", title: "Suelos" },
          { id: "suministros", title: "Suministros y otros equipos" },
        ].map((item, index) => (
          <Grid item key={index}>
            <Button
              variant="outlined"
              onClick={() => handleButtonClick(item.id)}
              sx={{
                backgroundColor: "#fff",
                color: "#23374D",
                borderColor: "#23374D",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              {item.title}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Hero;
