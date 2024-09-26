import React from "react";
import Header from "../components/Header";
import ProductsGrid from "../components/ProductsGrid";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <Typography variant="h3" align="center" sx={{ marginTop: "30px" }}>
        Innovative Materials for the Future
      </Typography>
      <ProductsGrid />
      <Footer />
    </div>
  );
};

export default ProductsPage;
