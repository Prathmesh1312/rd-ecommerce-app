import React from "react";
import {
  Grid2,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import CompareIcon from "@mui/icons-material/Compare";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { styled } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ButtonBar = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(99, 99, 99, 0.7)",
  display: "flex",
  justifyContent: "space-around",
  padding: "10px",
  opacity: 0,
  height: "76px",
  transition: "opacity 0.3s",
});

const ProductCard = styled(Card)({
  position: "relative",
  "&:hover": {
    "& .button-bar": {
      opacity: 1,
    },
    "& .cardcontent": {
      color: "white",
    },
  },
});

function ProductCategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryName) {
      axios
        .get(config.SERVER_PRODUCT_URL + `c/${categoryName}`)
        .then((response) => {
          setProducts(response.data); // Assuming your data is nested like this
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    } else {
      console.log("categoryName is undefined or empty");
    }
  }, [categoryName, setProducts]);

  return (
    <div>
      <Navbar />
      <Typography variant="h4" gutterBottom>
        {" "}
        {categoryName} Category
      </Typography>
      <Grid2 container spacing={6}>
        {products.map((product) => (
          <Grid2 item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard>
              <CardMedia
                component="img"
                height="400"
                image={`${config.SERVER_IMAGE_URL}${product.image}`}
                alt={product.name}
              />
              <CardContent>
                <Typography className="cardcontent" variant="h5">
                  {product.name}
                </Typography>
                <Typography className="cardcontent" variant="body1">
                  Price: ${product.price}
                </Typography>
                <ButtonBar className="button-bar">
                  <Button color="primary" fontSize="large">
                    <ShoppingCart fontSize="large" />
                  </Button>
                  <IconButton color="primary">
                    <CompareIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    <VisibilityIcon color="red" fontSize="large" />
                  </IconButton>
                  <IconButton color="secondary">
                    <FavoriteIcon color="error" fontSize="large" />
                  </IconButton>
                </ButtonBar>
              </CardContent>
            </ProductCard>
          </Grid2>
        ))}
      </Grid2>
      <Footer />
    </div>
  );
}

export default ProductCategoryPage;
