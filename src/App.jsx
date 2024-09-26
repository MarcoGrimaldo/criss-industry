// App.js
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import ContacUsPage from "./pages/ContacUsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact-us" element={<ContacUsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
