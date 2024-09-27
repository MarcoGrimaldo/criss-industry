import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import CenteredButton from "./CenteredButton";

// Styled Card with hover animation
const AnimatedCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
  },
}));

const GridPreviewItems = () => {
  const [products, setProducts] = useState([]); // State to store products
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products?limit=4`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <>
      <Typography variant="h4" align="center">
        Productos
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4, // Space between items
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {products.map((item) => (
          <Box
            key={item.id}
            sx={{
              flex: "1 1 300px", // Each item takes up at least 300px and grows if there’s space
              maxWidth: "300px", // Limit the maximum width to 300px
            }}
          >
            <AnimatedCard>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleButtonClick(item.id)}
                  sx={{ marginTop: 2 }}
                >
                  Ver más
                </Button>
              </CardContent>
            </AnimatedCard>
          </Box>
        ))}
      </Box>
      <CenteredButton />
    </>
  );
};

export default GridPreviewItems;
