import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/logo.png";
import Tabs from "@mui/material/Tabs";
import { Button, Snackbar, Alert } from "@mui/material";
import { styled } from "@mui/system";
import NestedMenu from "./NestedMenu";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const Logo = styled("div")({
  width: "15%",
  display: "flex",
  alignItems: "center",
  margin: "5px",
});

const NavTabs = styled(Tabs)({
  width: "25%",
  color: "white",
});

const LoginButton = styled(Button)({
  width: "10%",
  margin: "10px",
  gap: "10px",
});

const Navbar = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar

  return (
    <AppBar position="static" color="default" margin="auto">
      <Toolbar>
        <Logo>
          <Link to="/">
            <img src={logo} alt="Amcart Ecommerce Logo" href="/" />
          </Link>
        </Logo>
        <NavTabs>
          <NestedMenu label="Products" />
        </NavTabs>
        <SearchBar />
        {!localStorage.getItem("token") ? (
          <LoginButton
            color="primary"
            href="/login"
            type="submit"
            variant="contained"
            sx={{ padding: "18px" }}
          >
            <LoginIcon />
            Login
          </LoginButton>
        ) : (
          <LoginButton
            color="primary"
            onClick={() => {
              localStorage.removeItem("token");
              setSnackbarOpen(true);
            }}
            variant="contained"
            sx={{ padding: "18px" }}
          >
            <LogoutIcon />
            Logout
          </LoginButton>
        )}
        <LoginButton
          color="primary"
          href="/login"
          type="submit"
          variant="contained"
          sx={{ padding: "18px" }}
        >
          <ShoppingCartCheckoutIcon />
          Cart
        </LoginButton>
      </Toolbar>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1000} // Hide after 3 seconds
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Logout successful!
        </Alert>
      </Snackbar>
    </AppBar>
  );
};

export default Navbar;
