import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Paper, Box } from '@mui/material';
import '../css/Details.css'; // مسار صحيح: اخرج لمجلد css

const Details = () => {
  const { state: dish } = useLocation();
  const navigate = useNavigate();

  if (!dish) return <Typography align="center">يرجى اختيار طبق</Typography>;

  return (
    <Container className="details-container">
      <Paper elevation={4} className="details-paper">
        <img src={dish.image} alt={dish.name} className="details-hero-image" />
        <Box className="details-content">
          <Typography variant="h5" className="details-title">{dish.name}</Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>المكونات:</Typography> 
          <Typography variant="body1" className="ingredients-list">{dish.ingredients}</Typography> <br></br>         
          <Box className="details-price-tag">price: {dish.price.toFixed(2)} JOD</Box><br></br>
          <Button variant="contained" className="back-button" onClick={() => navigate('/menu')}>
            العودة للمنيو
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
export default Details;