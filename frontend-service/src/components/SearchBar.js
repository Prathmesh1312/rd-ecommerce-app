import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform search logic here using searchTerm
    console.log('Searching for:', searchTerm);
    // You can call an API or filter data based on searchTerm
  };

  return (
    <TextField
    sx={{ paddingRight: '20px' }}
    label="Search"
    variant="outlined"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearch} aria-label="search">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          handleSearch();
        }
      }}
      fullWidth // Make the search bar take full width of its container.
    />
  );
}

export default SearchBar;