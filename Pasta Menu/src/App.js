import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // الصفحة الترحيبية
import Menu from './components/Menu'; // صفحة المنتجات
import Details from './components/Details';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <Routes>
            {/* الرئيسية: الآن هي صفحة الترحيب فقط */}
            <Route path="/" element={<Home />} />
            
            {/* المنيو: صار بصفحة لحاله اسمها menu */}
            <Route path="/menu" element={<Menu />} />
            
            {/* تفاصيل الطبق */}
            <Route path="/details" element={<Details />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;