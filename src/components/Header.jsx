import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger icon

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#23374D" }}>
      <Toolbar>
        {/* Logo */}
        <Box sx={{ flexGrow: 1 }}>
          <img
            src="/logo1.png"
            alt="Garruz Logo"
            style={{ height: 50, paddingTop: "10px" }}
          />
        </Box>

        {/* Desktop Navigation - Hidden on small screens */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button color="inherit" component={RouterLink} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={RouterLink} to="/products/todos">
            Productos
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact-us">
            Contacto
          </Button>
        </Box>

        {/* Mobile Menu Icon - Visible only on small screens */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {[
            { text: "Inicio", path: "/" },
            { text: "Productos", path: "/products/todos" },
            { text: "Contacto", path: "/contact-us" },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
