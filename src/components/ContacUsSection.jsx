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
  backgroundColor: "#e85d17",
  color: "#fff",
  padding: "12px 24px",
  fontWeight: "bold",
  textTransform: "none",
  marginTop: "16px",
  "&:hover": {
    backgroundColor: "#b74d0f",
  },
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
        Contact Us
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ marginBottom: "40px", color: "#666" }}
      >
        We'd love to hear from you! Please fill out the form below or reach us
        via WhatsApp.
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
              Send us a message
            </Typography>

            <form noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Name"
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
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                margin="normal"
              />

              <StyledButton variant="contained" fullWidth>
                Submit
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
              Contact Us on WhatsApp
            </WhatsAppButton>
          </Box>
        </Box>
      </ContactContainer>
    </Box>
  );
};

export default ContactUsSection;
