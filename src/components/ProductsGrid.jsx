import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
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
  const [loading, setLoading] = useState(true); // State to track loading
  const navigate = useNavigate();
  let url;

  const path = window.location.pathname;
  const parts = path.split("/");
  const specialty = parts[parts.length - 1];
  if (specialty) {
    if (specialty === "todos") {
      url = `${import.meta.env.VITE_API_URL}/api/products/`;
    } else {
      url = `${
        import.meta.env.VITE_API_URL
      }/api/products/specialty/${specialty}`;
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch product data");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setProducts("error");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading after fetch (success or failure)
      }
    };

    fetchProducts();
  }, [url, products]); // Empty dependency array means this effect runs only once after the initial render

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress /> {/* Show a loading spinner while fetching data */}
      </Box>
    );
  }

  if (products === "error") {
    return (
      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h5" color="error">
          Productos no encontrados
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 3,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{ marginTop: "10px", width: "100%" }}
      >
        {[
          { id: "concretos", title: "Concretos" },
          { id: "agregados", title: "Agregados" },
          { id: "asfaltos", title: "Asfaltos" },
          { id: "suelos", title: "Suelos" },
          { id: "suministros", title: "Suministros y otros equipos" },
          { id: "todos", title: "Todos nuestros productos" },
        ].map((item, index) => (
          <p>{item.id === specialty ? item.title : ""}</p>
        ))}
      </Typography>
      {products.map((product) => (
        <StyledCard key={product.id}>
          <CardMedia
            component="img"
            height="140"
            image={product.images[0]}
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
