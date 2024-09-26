import React from "react";
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

// Sample data array
const products = [
  {
    id: 1,
    title: "Rocco Classic 6 x 400g",
    description:
      "Complete wet dog food made with lots of high quality meat and offal.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Rocco Beef 3 x 800g",
    description:
      "High-quality beef with vitamin-rich carrots and mineral clay.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Rocco Chicken 5 x 600g",
    description: "Delicious chicken with tasty calcium bones.",
    image: "https://via.placeholder.com/150",
  },
  // Add more products as needed
];

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "345px",
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
  margin: "20px", // Ensure some spacing around cards
}));

const ProductsGrid = () => {
  const navigate = useNavigate();

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
              See More
            </Button>
          </CardContent>
        </StyledCard>
      ))}
    </Box>
  );
};

export default ProductsGrid;
