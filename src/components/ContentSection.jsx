// ContentSection.js
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const ContentSection = ({ title, content, imgSrc }) => {
  return (
    <Box sx={{ padding: "40px 20px" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1" sx={{ marginTop: "20px" }}>
            {content}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={imgSrc} alt={title} style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentSection;
