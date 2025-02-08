import React, { useState, useEffect } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import GridPreviewItems from "./GridPreviewItems";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled container for the detail view
const DetailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "start",
  maxWidth: "1200px",
  margin: "40px auto",
  padding: "20px",
  flexWrap: "wrap",
}));

const LeftSection = styled(Box)(({ theme }) => ({
  flexBasis: "100%",
  padding: "0 70px 0 20px",
  maxWidth: "200px",
  [".slick-arrow:before"]: {
    color: "gray",
  },
}));

const RightSection = styled(Box)(({ theme }) => ({
  flexBasis: "50%",
}));
// Custom styled WhatsApp button
const WhatsAppButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#25D366", // WhatsApp green color
  color: "#fff",
  padding: "12px 24px",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#1ebe5b",
  },
}));

const ProductDetail = () => {
  const [product, setProduct] = useState(null); // Default to null to check loading state
  const [loading, setLoading] = useState(true); // State to track loading

  const path = window.location.pathname;
  const parts = path.split("/");
  const productKey = parts[parts.length - 1];
  const url = `${import.meta.env.VITE_API_URL}/api/products/${productKey}`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch product data");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading after fetch (success or failure)
      }
    };

    fetchProduct();
  }, [url]);

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

  if (!product) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h5" color="error">
          Product not found.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <DetailContainer>
        <LeftSection>
          {/* Image Carousel */}
          <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
            {product.images.map((image, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <img
                  src={image}
                  alt={`Product image ${index + 1}`}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </Box>
            ))}
          </Slider>
        </LeftSection>
        <RightSection>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "20px" }}>
            {product.description}
          </Typography>
          <WhatsAppButton
            variant="contained"
            startIcon={<WhatsAppIcon />}
            endIcon={<ArrowForwardIcon />}
            onClick={() => window.open("https://wa.me/1234567890", "_blank")} // Replace with your WhatsApp number
          >
            Cotizar
          </WhatsAppButton>
        </RightSection>
      </DetailContainer>
      <GridPreviewItems />
    </>
  );
};

export default ProductDetail;
