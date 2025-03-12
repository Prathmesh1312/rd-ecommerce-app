import { useState } from "react";
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import { Button } from "@mui/material";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { TextField, Typography, Rating } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShoppingCart } from "@mui/icons-material";

const product = {
  name: "Stylish Shirt",
  price: "$120.00",
  description: "High-quality stylish sneakers with a comfortable fit and modern design.What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  images: [
    "https://storage.googleapis.com/rd-ecommerce-app/t_black.jpg",
  ],
  colors: ["Red", "Blue", "Black"],
  sizes: ["7", "8", "9", "10", "11"],
  stock: 30,
  rating: 1.5,
};

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
    <Navbar />
    <div className="max-w-4xl mx-auto p-6">
      <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {product.images.map((img, index) => (
             <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <div style={{flex: 2}}>
                  <CardMedia key={index} component="img"  image={img} alt="Product Image" style={{ borderRadius: "10px" }} />
                </div>
                <div style={{flex: 3}}> 
                <CardContent >
                  <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                  <div style={{flex: 3}}>
                  <Typography variant="h5" fontWeight="bold">{product.name}</Typography>
                  <Typography variant="h6" color="primary">{product.price}</Typography>
                  <Rating value={product.rating} precision={0.5} readOnly />
                  </div>
                  <Typography variant="body2" color="success" sx={{ mt: 1}} style={{ flex: 1 }} >
                      {product.stock > 0 ? <p style={{fontWeight:"bold", fontSize:"20px", textAlign:"center"}}>🟢 In Stock</p> : <p style={{fontWeight:"bold", color:'Red'}}>🔴 Out of Stock</p >}
                    </Typography>
                  </div>
                
                  <div style = {{display: "flex", flexDirection: "row", gap: "20px"}}>
                    <FormControl fullWidth sx={{ mt: 2 }} style={{ flex: 1 }}>
                      <InputLabel>Color</InputLabel>
                      <Select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                        {product.colors.map((color) => (
                          <MenuItem key={color} value={color}>{color}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  
                    <FormControl fullWidth sx={{ mt: 2 }}style={{ flex: 1 }} >
                      <InputLabel>Size</InputLabel>
                      <Select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} >
                        {product.sizes.map((size) => (
                          <MenuItem key={size} value={size} >{size}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <TextField
                      fullWidth sx={{ mt: 2 }}
                      style={{ flex: 1 }}
                      type="number"
                      label="Quantity"
                      inputProps={{ min: 1, max: product.stock }}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
            
                    <CardActions style={{flex: 1}}>
                     
                      <Button variant="contained" color="primary" fullWidth  sx={{ mt:1, p:2}} startIcon = {<ShoppingCart/>} >
                      Add to Cart
                    </Button>
                  </CardActions>
                  
                  </div>
                  </CardContent>
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    {product.description}
                  </Typography>
                </div> 
             </div>
            ))}
        </div>
      </Card>
    </div>
    <Footer />
    </>  
  );
}
