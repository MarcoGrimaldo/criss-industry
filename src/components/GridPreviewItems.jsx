import React from "react";
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

// Sample data for the items
const flexData = [
  {
    id: 1,
    title: "Item 1",
    image: "https://via.placeholder.com/300",
    description: "Description for item 1",
  },
  {
    id: 2,
    title: "Item 2",
    image: "https://via.placeholder.com/300",
    description: "Description for item 2",
  },
  {
    id: 3,
    title: "Item 3",
    image: "https://via.placeholder.com/300",
    description: "Description for item 3",
  },
  {
    id: 4,
    title: "Item 4",
    image: "https://via.placeholder.com/300",
    description: "Description for item 4",
  },
];

// Styled Card with hover animation
const AnimatedCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
  },
}));

const GridPreviewItems = () => {
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/product/${id}`);
  };

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
        {flexData.map((item) => (
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
                  See More
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
