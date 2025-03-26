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
import './NewProducts.css';



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
  borderRadius: "5%",
  "&:hover": {
    "& .button-bar": {
      opacity: 1,
    },
    "& .cardcontent": {
      color: "white",
    },
  },
});



const NewProducts = () => {

  const navigate = useNavigate();


  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (true) {
      axios
        .get(config.SERVER_PRODUCT_URL + `c/New Arrivals`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    } else {
      console.log("categoryName is undefined or empty");
    }
  }, [categoryName, setProducts]);

  return (
    <>
      <div className="new-products">
        <h2>New Arrivals</h2>
        <div className="products-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <ProductCard>
              <img
                src={`${config.SERVER_IMAGE_URL}${product.image}`}
                alt={product.name}
                // height={500}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
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
              </ProductCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewProducts;
