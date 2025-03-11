import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, IconButton, Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CompareIcon from '@mui/icons-material/Compare';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import Navbar from '../components/Navbar';


const ButtonBar = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px',
  opacity: 0,
  transition: 'opacity 0.3s',
});

const ProductCard = styled(Card)({
  position: 'relative',
  '&:hover': {
    '& .button-bar': {
      opacity: 1,
    },
  },
});

function ProductCategoryPage() {

  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    if (categoryName) {
      axios.get(config.SERVER_PRODUCT_URL+`c/${categoryName}`)
        .then(response => {
          setProducts(response.data); // Assuming your data is nested like this
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    } else {
        console.log("categoryName is undefined or empty");
    }
  }, [categoryName, setProducts]);

  // ... rest of your component code
  return (
    <div>
      <Navbar />
      <Typography variant="h4" gutterBottom> { categoryName }  Category</Typography>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard>
              <CardMedia
                component="img"
                height="150"
                image={`${config.SERVER_IMAGE_URL}${product.image}`}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">Price: ${product.price}</Typography>
              </CardContent>
              <ButtonBar className="button-bar">
                <Button variant="contained" color="primary" startIcon={<AddShoppingCartIcon />}>
                </Button>
                <IconButton color="primary">
                  <CompareIcon />
                </IconButton>
                <IconButton color="secondary">
                  <FavoriteIcon />
                </IconButton>
                <IconButton color="default">
                  <VisibilityIcon />
                </IconButton>
              </ButtonBar>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductCategoryPage;