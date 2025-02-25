import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SimpleAlert from '../components/alert';
import config from '../config';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for error messages
  const navigate = useNavigate(); // Initialize useNavigate

  async function login(event) {
    event.preventDefault();
    try {
      await axios.post(config.SERVER_BASE_URL+"users/login", {
        email: email,
        password: password,
        }).then((res) => 
        {
 
         if (res.data.message == "User not found!") 
         {
           alert("Email not exits");
         } 
         else if(res.data.message == "User Logged in!")
         { 
            <SimpleAlert />
            navigate('/');
         } 
          else 
         { 
            alert("Invalid password!");
         }
      }, fail => {
       console.error(fail); // Error!
});
    }

     catch (err) {
      alert(err);
    }
  
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Login
        </Typography>


        {error && <Alert severity="error">{error}</Alert>} {/* Display error message */}


        <form  noValidate sx={{ width: '100%', marginTop: 1 }}>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" onClick={login} fullWidth sx={{ marginTop: 2 }}>
            Login
          </Button>
        </form>
        <Box sx={{marginTop: 2}}>
          <Typography variant="body2">Don't have an account? <a href="/signup">Sign Up</a></Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;