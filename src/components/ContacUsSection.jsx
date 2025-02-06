import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Custom styles for the form container
const ContactContainer = styled(Box)(({ theme }) => ({
  maxWidth: "500px",
  margin: "40px auto",
  padding: "40px",
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
}));

// Custom styled submit button
const StyledButton = styled(Button)(({ theme }) => ({
  padding: "12px 24px",
  fontWeight: "bold",
  textTransform: "none",
  marginTop: "16px",
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

const ContactUsSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", padding: "60px 20px" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Contacto
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ marginBottom: "40px", color: "#666" }}
      >
        ¡Nos encantaría saber de usted! Por favor complete el siguiente
        formulario o comuníquese con nosotros A través de WhatsApp.
      </Typography>

      <ContactContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {/* Contact Form */}
          <Box sx={{ flex: 1, width: "100%" }}>
            <Typography variant="h5" gutterBottom>
              Envíanos un mensaje
            </Typography>

            <form noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Nombre"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Mensaje"
                variant="outlined"
                multiline
                rows={4}
                margin="normal"
              />

              <StyledButton variant="contained" fullWidth>
                Envíar
              </StyledButton>
            </form>
          </Box>

          {/* WhatsApp Contact Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <WhatsAppButton
              variant="contained"
              fullWidth
              startIcon={<WhatsAppIcon />}
              onClick={() => window.open("https://wa.me/1234567890", "_blank")} // Replace with your WhatsApp number
            >
              Contáctenos en WhatsApp
            </WhatsAppButton>
          </Box>
        </Box>
      </ContactContainer>
    </Box>
  );
};

export default ContactUsSection;
