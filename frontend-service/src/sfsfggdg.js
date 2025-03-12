// React Frontend (App.js - updated)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [token, setToken] = useState(localStorage.getItem('token')); // Get token from local storage

  useEffect(() => {
    // Check if token exists and set isLoggedIn accordingly
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signin', {
        username,
        password,
      });

      const jwt = response.data.token;
      localStorage.setItem('token', jwt); // Store token in local storage
      setToken(jwt);
      setIsLoggedIn(true); // Update login status
      console.log("Login Successful");

    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/api/auth/signup', {
            username,
            password,
        });
        console.log("Signup Successful");
    } catch (error) {
        console.error("Signup Failed", error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    setToken(null);
    setIsLoggedIn(false); // Update login status
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
          </form>

          <h2>Signup</h2>
          <form onSubmit={handleSignup}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Signup</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;