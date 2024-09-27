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

// Sample data for the cards
const cardData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card.",
    image: "https://files.grupogarruz.com.mx/images/iso.svg",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card.",
    image: "https://files.grupogarruz.com.mx/images/high-perf.svg",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the third card.",
    image: "https://files.grupogarruz.com.mx/images/solutions.svg",
  },
];

// Styled Card with hover animation
const AnimatedCard = styled(Card)(({ theme }) => ({
  display: "flex", // Flexbox layout to align image and content side by side
  alignItems: "center",
  maxWidth: "600px", // Card width
  marginInline: "12px", // Center the card horizontally
  padding: "10px",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column", // Stack image and text vertically on small screens
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row", // Align i
  },
}));

const WhyContent = () => {
  return (
    <>
      <Typography variant="h4" align="center">
        ¿Porque escogernos?
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4, // Spacing between cards
          padding: "40px 20px",
        }}
      >
        {cardData.map((item) => (
          <AnimatedCard key={item.id}>
            {/* Image on the left */}
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{ width: 150, borderRadius: "8px" }}
            />

            {/* Text on the right */}
            <CardContent sx={{ paddingLeft: 2 }}>
              <Typography variant="body1" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </AnimatedCard>
        ))}
      </Box>
    </>
  );
};

export default WhyContent;
