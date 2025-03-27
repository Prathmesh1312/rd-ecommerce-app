import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert() {
  return (
    <Alert
    icon={<CheckIcon fontSize="inherit" />}
    severity="success"
    sx={{
      '& .MuiAlert-message': {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize  : '3.5em',
        width: '100%', // Ensure it takes up the full width for proper centering
        display: 'block' // Ensure it's treated as a block element
      },
      justifyContent: 'center', // Center the alert content horizontally
      display: 'flex', // Use flexbox for centering
    }}
  >
    Test Alert
  </Alert>
  );
}
