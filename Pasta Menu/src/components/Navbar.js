import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; 

const Navbar = () => (
  <AppBar position="sticky" className="navbar-appbar">
    <Container>
      <Toolbar sx={{ justifyContent: 'space-between', direction: 'rtl' }}>
        <Typography variant="h6" className="navbar-logo">Bella Pasta Menu🍝</Typography>
        <div>
          <Button color="inherit" component={Link} to="/" className="nav-link">Home</Button>
          <Button color="inherit" component={Link} to="/menu" className="nav-link">Menu</Button>
        </div>
      </Toolbar>
    </Container>
  </AppBar>
);
export default Navbar;