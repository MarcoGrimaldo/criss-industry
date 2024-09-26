import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";

// Styled Card to match the design
const CustomCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  maxWidth: "1000px", // Adjust the width as necessary
  margin: "40px auto", // Center the card with margin
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow similar to the image
  borderRadius: "8px", // Rounded corners
  padding: "16px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column", // Stack image and text vertically on small screens
  },
}));

// Styled button to match the "Our Innovative Solutions" style
const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "16px",
  color: "#e85d17", // Custom orange color
  fontWeight: "bold",
  textTransform: "none", // Disable uppercase styling
  "&:hover": {
    color: "#b74d0f",
  },
}));

const MiscCardSection = () => {
  return (
    <CustomCard>
      {/* Image on the left */}
      <CardMedia
        component="img"
        image="https://via.placeholder.com/400x250" // Replace with your image
        alt="Material Innovation"
        sx={{
          width: { xs: "100%", sm: "400px" }, // Full width on small screens, fixed on larger
          height: "auto",
          borderRadius: "8px",
        }}
      />

      {/* Text on the right */}
      <CardContent sx={{ paddingLeft: { sm: 4 }, textAlign: "left" }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
          Material Innovation
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginTop: 2, lineHeight: "1.5", color: "#666" }}
        >
          We utilize our analytically driven approach combined with our cutting
          edge advanced development center to create the ideal solution for your
          specific requirements.
        </Typography>
        {/* Styled link as a button */}
        <StyledButton variant="text">
          Our Innovative Solutions &gt;
        </StyledButton>
      </CardContent>
    </CustomCard>
  );
};

export default MiscCardSection;
