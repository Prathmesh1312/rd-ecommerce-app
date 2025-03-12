import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const Navigate = useNavigate();

  const  handleSearch = () => {
    if (searchTerm){
    Navigate(`/search/${searchTerm}`);
  }
  else{
      Navigate(`/search/:Blank`);
    }
  };

  return (
    <TextField
    sx={{ paddingRight: '20px' }}
    label="Search products...."
    variant="outlined"
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value)
       
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={(e) =>  handleSearch()}  aria-label="search">
              <SearchIcon color='primary' fontSize='large'/>
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