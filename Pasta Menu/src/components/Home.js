import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';
import '../css/Home.css'; // تأكد من إنشاء هذا الملف

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box className="home-hero">
      <Container maxWidth="md" sx={{ textAlign: 'center', color: 'white' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          أهلاً بكم في Bella Pasta 
        </Typography>
        <Typography variant="h6" sx={{ mb: 5 }}>
          نقدم لكم أشهى أنواع الباستا الإيطالية بأيدي نشمية.<br>
          </br> 
           استعدوا لتجربة طعام لا تُنسى !

        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          onClick={() => navigate('/menu')} // هون الزر اللي بيدخل للمنيو
          sx={{ 
            bgcolor: '#d32f2f', 
            fontSize: '1.5rem', 
            padding: '15px 50px', 
            borderRadius: '50px',
            '&:hover': { bgcolor: '#b71c1c' }
          }}
        >
          ابدأ استكشاف المنيو
        </Button>
      </Container>
    </Box>
  );
};

export default Home;