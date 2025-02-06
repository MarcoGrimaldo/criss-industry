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
      {/* Text on the right */}
      <CardContent sx={{ paddingLeft: { sm: 4 }, textAlign: "left" }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
          Misión
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginTop: 2, lineHeight: "1.5", color: "#666" }}
        >
          Fabricar y comercializar productos de alto valor con pasión y
          compromiso, ofreciendo orientación y asesoramiento personalizados para
          satisfacer las necesidades de nuestros clientes. Nos esforzamos por
          apoyar su crecimiento y competitividad en sus respectivos mercados,
          garantizando calidad y excelencia en cada interacción.
          <br />
          <br />
        </Typography>
        <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
          Visión
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginTop: 2, lineHeight: "1.5", color: "#666" }}
        >
          Consolidarnos como líderes en el sector manufacturero, siendo
          reconocidos por nuestra innovación, calidad y capacidad de adaptación.
          Aspiramos a construir una sólida cartera de clientes en todos los
          sectores industriales, cumpliendo con los más altos estándares de
          calidad nacionales e internacionales y promoviendo relaciones
          sostenibles a largo plazo.
        </Typography>
      </CardContent>
    </CustomCard>
  );
};

export default MiscCardSection;
