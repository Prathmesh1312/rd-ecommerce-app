import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Box, Alert, Radio, RadioGroup, FormLabel, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import config from '../config';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [error, setError] = useState(null); // State for error messages
  const navigate = useNavigate(); // Initialize useNavigate

  async function save(event) {
    event.preventDefault();
    try 
    {
      await axios.post(config.SERVER_BASE_URL+"users/register", {
      email: email,
      password: password,
      gender: gender,
      phonenumber : phonenumber
      });
      alert("User Registation Successful !");
      window.location.reload(true);
      navigate('/signup');

    } 
    catch (err) 
    {
      alert(err);
    }
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Register
        </Typography>

        {error && <Alert severity="error">{error}</Alert>} {/* Display error message */}

        <form noValidate sx={{ width: '100%', marginTop: 1 }}>
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
           <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
           <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group" onChange={(e) => setGender(e.target.value)}
      >
        <FormControlLabel value="Female" control={<Radio />} label="Female" />
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
      </RadioGroup>
           <TextField
            label="Phone Number"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="phonenumber"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" onClick={save} fullWidth sx={{ marginTop: 2 }}>
            Register
          </Button>
        </form>
        <Box sx={{marginTop: 2}}>
          <Typography variant="body2">Already have an account? <a href="/Login">Login</a></Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;