import React from 'react';
import { Container, Typography, Box, Button, Grid2, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuAppBar  from './MenuAppBar';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Tabs from '../components/tabs';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Tabs />
      <Box sx={{ marginTop: 8, marginBottom: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          RD Ecommerce App
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom color="text.secondary">
          Your one-stop solution for everything.
        </Typography>
        <Button variant="contained" color="primary" href="/login">
          Login
        </Button>
      </Box>
      
    </Container>
  );
};

export default HomePage;