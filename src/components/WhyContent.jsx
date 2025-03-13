import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

// Sample data for the cards
const cardData = [
  {
    id: 1,
    title: "Calidad en el servicio",
    description:
      "Nos comprometemos con la excelencia en cada interacción. Nuestro equipo garantiza atención personalizada, soluciones adaptadas a tus necesidades y un servicio que supera expectativas.",
    image: "https://files.grupogarruz.com.mx/images/iso.svg",
  },
  {
    id: 3,
    title: "Soluciones creativas",
    description:
      " Pensamos fuera de lo convencional para ofrecerte estrategias innovadoras. Nos especializamos en transformar desafíos en oportunidades con ideas frescas y efectivas.",
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
    <Box sx={{ paddingTop: "3em" }}>
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
          flexWrap: "wrap",
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
              <Typography variant="h6" color="text.secondary">
                {item.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </AnimatedCard>
        ))}
      </Box>
    </Box>
  );
};

export default WhyContent;
