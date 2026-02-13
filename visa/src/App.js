import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentForm from './components/PaymentForm';
import Success from './pages/Success';
import VisaCard from './components/VisaCard';

function App() {
  return (
    <Router>
      <Routes>
        {/* الصفحة الرئيسية تحتوي على الفورم */}
        <Route path="/" element={<PaymentForm />} />
        {/* صفحة النجاح بعد الدفع */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
