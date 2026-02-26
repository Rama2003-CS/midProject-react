import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import '../css/Footer.css'; 

const Footer = () => (
  <Box component="footer" className="footer-box">
    <Container>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Bella Pasta Menu 🍝</Typography>
      <Typography variant="body2" className="footer-text">
       QR Code أفضل تجربة باستا إيطالية في الأردن عبر الـ 
      </Typography>
    </Container>
  </Box>
);
export default Footer;