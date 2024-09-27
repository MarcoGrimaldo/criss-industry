import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Criss Industries
        </Typography>
        {/* Replace Buttons with Link components styled as buttons */}
        <Button color="inherit" component={RouterLink} to="/">
          Inicio
        </Button>
        <Button color="inherit" component={RouterLink} to="/products">
          Productos
        </Button>
        <Button color="inherit" component={RouterLink} to="/contact-us">
          Contacto
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
