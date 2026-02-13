import React from 'react';
import { Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Success.css';

function Success() {
  const navigate = useNavigate();
  return (
    <Container className="success-container">
      <div className="success-icon">✓</div>
      <h1>تم الدفع بنجاح</h1>
      <Button className="back-button" variant="outlined" onClick={() => navigate('/')}>رجوع</Button>
    </Container>
  );
}
export default Success;