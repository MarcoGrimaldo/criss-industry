import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "345px",
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
  margin: "20px",
}));

const ProductsGrid = () => {
  const [products, setProducts] = useState([]); // State to store products
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 3,
      }}
    >
      {products.map((product) => (
        <StyledCard key={product.id}>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              Ver más
            </Button>
          </CardContent>
        </StyledCard>
      ))}
    </Box>
  );
};

export default ProductsGrid;
