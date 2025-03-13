import React, { useState } from "react";
import axios from "axios";
import { Typography, TextField, Button, Box, Alert, Paper, IconButton, InputAdornment, Snackbar } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import config from "../config";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    setError(null);

    try {
      const response = await axios.post(`${config.SERVER_BASE_URL}users/login`, {
        email,
        password,
      });

      const { message, token } = response.data;

      if (message === "User not found!") {
        setError("Email does not exist. Please sign up.");
      } else if (message === "User Logged in!") {
        localStorage.setItem("token", token || "true");
        setSnackbarOpen(true); // Show success Snackbar
        setTimeout(() => navigate("/"), 2000); // Redirect after delay
      } else {
        setError("Invalid password! Please try again.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 3, boxShadow: 3, margin: 20, width: "400px" }}>
        <Typography variant="h5" component="h2" gutterBottom textAlign="center" color="primary">
          Login
        </Typography>

        {error && <Alert severity="error">{error}</Alert>}

        <form onSubmit={login} style={{ width: "100%", marginTop: 1 }}>
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
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Login
          </Button>
          <Box sx={{ marginTop: 2, textAlign: "center" }}>
            <Typography variant="body2">
              Don't have an account? <a href="/signup">Sign Up</a>
            </Typography>
          </Box>
        </form>
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // Hide after 3 seconds
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Login successful! Redirecting...
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginPage;
