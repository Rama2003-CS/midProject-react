import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Paper, Grid } from '@mui/material';
import VisaCard from './VisaCard';
import './PaymentForm.css';

function PaymentForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', number: '', expiry: '' ,cvv: ''});

  useEffect(() => {
    if (formData.number.startsWith('4')) setFormData(prev => ({ ...prev, type: 'visa' }));
    else if (formData.number.startsWith('5')) setFormData(prev => ({ ...prev, type: 'mastercard' }));
    else setFormData(prev => ({ ...prev, type: 'visa' }));
  }, [formData.number]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="sm" className="form-container">
      <VisaCard data={formData} />
      <Paper elevation={3} className="form-paper">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth label="رقم البطاقة" name="number" onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="اسم صاحب البطاقة" name="name" onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="تاريخ انتهاء البطاقة" name="expiry" onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="CVV" name="cvv" onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button  variant="contained" fullWidth onClick={() => navigate('/success')} className="pay-button">
              إتمام الدفع
            </Button>
          </Grid>
          
        </Grid>
      </Paper>
    </Container>
  );
}
export default PaymentForm;