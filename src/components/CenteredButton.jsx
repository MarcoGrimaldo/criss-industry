import React from "react";
import { Button, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const CenteredButton = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 4 }}>
      {" "}
      {/* Adjust marginTop (mt) as needed */}
      <Button
        variant="contained"
        color="primary"
        sx={{ width: 400 }} // Setting the width of the button
        onClick={() => navigate("/products/todos")} // Navigation action
        endIcon={<ArrowForwardIcon />} // Add the arrow icon at the end of the button text
      >
        Ver todos los productos
      </Button>
    </Box>
  );
};

export default CenteredButton;
