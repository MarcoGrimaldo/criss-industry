import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";

// Styled container for the detail view
const DetailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "start",
  maxWidth: "1200px",
  margin: "40px auto",
  padding: "20px",
}));

const LeftSection = styled(Box)(({ theme }) => ({
  flexBasis: "40%",
  paddingRight: "20px",
  img: {
    width: "100%", // Ensure the image is fully responsive
    borderRadius: "8px",
  },
}));

const RightSection = styled(Box)(({ theme }) => ({
  flexBasis: "60%",
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginTop: "20px",
}));

const StyledTab = styled(Tab)({});

// Sample product data
const productData = {
  id: 1,
  title: "Rocco Classic 6 x 400g",
  description:
    "Complete wet dog food made with lots of high quality meat and offal. With 100% fresh and grain-free ingredients! Your dog will love this species-appropriate meaty meal.",
  image: "https://via.placeholder.com/400x300", // Replace with actual image path
  ingredients: "Pure beef, water, and essential vitamins and minerals.",
  feedingGuide:
    "Feed adult dogs 1.5 to 2.5 cans per 20 lbs of body weight per day.",
};

const ProductDetail = () => {
  const { id } = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [product, setProduct] = useState([]); // State to store products

  // Get the current pathname from the window location
  const path = window.location.pathname;

  // Split the path into parts
  const parts = path.split("/");
  // Get the last part which should be the product key if the URL follows the same pattern
  const productKey = parts[parts.length - 1];
  // Construct the URL with the product key
  const url = `${import.meta.env.VITE_API_URL}/api/products/${productKey}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <DetailContainer>
      <LeftSection>
        <img src={product.image} alt={product.title} />
      </LeftSection>
      <RightSection>
        <Typography variant="h4" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          {product.description}
        </Typography>
        <StyledTabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="product details tabs"
        >
          <StyledTab label="Ingredients" />
          <StyledTab label="Feeding Guide" />
        </StyledTabs>
        {tabValue === 0 && (
          <Typography sx={{ marginTop: "20px" }}>
            {productData.ingredients}
          </Typography>
        )}
        {tabValue === 1 && (
          <Typography sx={{ marginTop: "20px" }}>
            {productData.feedingGuide}
          </Typography>
        )}
        <Typography variant="body2" sx={{ marginTop: "20px", color: "#666" }}>
          <strong>Customer reviews:</strong> Great Wet Food: "Our two Henry
          (French Bulldog) and Lily (Boxer) really love Rocco we have all the
          different flavours so they get a fantastic variety. It's a great
          alternative to raw feeding which..."
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: "20px" }}>
          Upload your product photo
        </Button>
      </RightSection>
    </DetailContainer>
  );
};

export default ProductDetail;
