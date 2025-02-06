import React from "react";
import Header from "../components/Header";
import ProductsGrid from "../components/ProductsGrid";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <ProductsGrid />
      <Footer />
    </div>
  );
};

export default ProductsPage;
