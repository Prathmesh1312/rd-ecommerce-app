import React, { useState, useRef } from "react";
import axios from "axios";
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
  Typography,
  FormLabel,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import config from "../config";
import ValidatedTextField from "../components/ValidatedTextField.js";
import {
  emailValidator,
  passwordValidator,
  phoneValidator,
} from "../components/validators.js";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate(); // Initialize useNavigate
  const formValid = useRef({ email: false, password: false, phone: false });
  const [gender, setGender] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar

  async function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(formValid.current).every((isValid) => isValid)) {
      try {
        await axios.post(config.SERVER_USER_URL + "users/register", {
          email: localStorage.Email,
          password: localStorage.Password,
          gender: gender,
          phonenumber: localStorage.Phone,
        });
        setSnackbarOpen(true); // Show success Snackbar
        setTimeout(() => navigate("/Login"), 2000);
      } catch (err) {
        alert(err);
      }
    } else {
      alert("Form is invalid! Please check the fields...");
    }
  }
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper
        elevation={3}
        sx={{ padding: 4, width: 400, borderRadius: 3, boxShadow: 3 }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          textAlign="center"
          color="primary"
        >
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <ValidatedTextField
            label="Email"
            validator={emailValidator}
            onChange={(isValid) => (formValid.current.email = isValid)}
          />
          <ValidatedTextField
            label="Password"
            validator={passwordValidator}
            onChange={(isValid) => (formValid.current.password = isValid)}
          />
          <ValidatedTextField
            label="Phone"
            validator={phoneValidator}
            onChange={(isValid) => (formValid.current.phone = isValid)}
          />
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ marginTop: 2, color: "black" }}
          >
            Gender
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
          </RadioGroup>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: 2, borderRadius: 2 }}
          >
            Register
          </Button>

          <Box sx={{ marginTop: 2, placeItems: "center" }}>
            <Typography variant="body2">
              Already have an account? <a href="/Login">Login</a>
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // Hide after 3 seconds
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          User Registration Successful! Redirecting...
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default SignUp;
