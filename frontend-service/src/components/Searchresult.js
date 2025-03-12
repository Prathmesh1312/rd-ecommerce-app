import React from 'react';
import { Grid2, Card, CardContent, CardMedia, Typography, Button, IconButton, Box } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
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
    backgroundColor: 'rgba(99, 99, 99, 0.7)',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    opacity: 0,
    height: '76px',
    transition: 'opacity 0.3s',
  });
  
  const ProductCard = styled(Card)({
    position: 'relative',
    '&:hover': {
      '& .button-bar': {
        opacity: 1,
      },
      '& .cardcontent': {
        color: 'white',
      },
    },
  });
  
  


export default function Searchresult() {
    const { query } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (query !== ":Blank") {
          axios.get(config.SERVER_PRODUCT_URL+`p/${query}`)
            .then(response => {
              setProducts(response.data.data); 
            })
            .catch(error => {
              console.error('Error fetching products:', error);
            });
        } else {
            console.log("query is undefined or empty");
        }
      }, [query, setProducts]);

      console.log(products);

      return(
        query !== ":Blank" ? (
            <div>
            <Navbar />
            <Typography variant="h4" gutterBottom margin={3}>Search Results for: "{ query }"</Typography>
            <Grid2 container spacing={6}>
                {products.map(product => (
                <Grid2 item xs={12} sm={6} md={3} key={product.id}>
                    <ProductCard>
                    <CardMedia
                        component="img"
                        height="400"
                        image={`${config.SERVER_IMAGE_URL}${product.image}`}
                        alt={product.name}
                    />
                    <CardContent >
                        <Typography className="cardcontent" variant="h5">{product.name}</Typography>
                        <Typography className="cardcontent" variant="body1">Price: ${product.price}</Typography>
                    <ButtonBar className="button-bar">
                        <Button color="primary" fontSize='large' >
                        <ShoppingCart fontSize='large'/>
                        </Button>
                        <IconButton color="primary">
                        <CompareIcon fontSize='large'/>
                        </IconButton>
                        <IconButton color="primary">
                        <VisibilityIcon  color='red' fontSize='large'/>
                        </IconButton>
                        <IconButton color="secondary">
                        <FavoriteIcon color='error'fontSize='large'/>
                        </IconButton>
                    </ButtonBar>
                    </CardContent>
                    </ProductCard>
                </Grid2>
                ))}
            </Grid2>
            </div>
        ):(
        <div>
          <Navbar />
          <Typography variant="h4" gutterBottom margin={3}>Blank Search are not allowed</Typography>
        </div>
        )
)}


