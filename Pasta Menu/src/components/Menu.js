import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import { pastaMenu } from './data'; 
import '../css/Menu.css'; 

const Menu = () => {
  const navigate = useNavigate();
  return (
    <Container className="menu-container">
      <Grid container spacing={4} display="flex" alignItems="stretch"> 
  {pastaMenu.map((dish) => (
    <Grid item xs={12} sm={6} md={4} key={dish.id} sx={{ display: 'flex' }}>
      <Card className="dish-card" onClick={() => navigate('/details', { state: dish })}>
        <CardMedia
          component="img"
          image={dish.image}
          alt={dish.name}
          className="dish-image"
        />
        <CardContent className="dish-content">
          <Typography variant="h5" className="dish-title">
            {dish.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
    </Container>
  );
};
export default Menu;