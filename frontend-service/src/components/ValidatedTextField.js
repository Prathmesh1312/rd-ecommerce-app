import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ValidatedTextField = ({ label, validator, onChange, value }) => {
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    const errorMessage = validator(newValue);
    localStorage.setItem(label, newValue);
    setError(errorMessage);
    onChange(!errorMessage);
  };

  return (
    <TextField
      label={label}
      value={value}
      type={label === "Password" && !showPassword ? "password" : "text"}
      margin="normal"
      variant="outlined"
      required
      fullWidth
      onChange={handleChange}
      error={!!error}
      helperText={error}
      InputProps={
        label === "Password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
      sx={{
        "& .MuiInputLabel-root.Mui-error": {
          color: "#ff8804",
        },
        "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
          border: "3px solid #ff8804",
        },
        "& .MuiFormHelperText-root.Mui-error": {
          color: "#ff8804",
        },
      }}
    />
  );
};

export default ValidatedTextField;
