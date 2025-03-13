import { use, useState } from "react";
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import { Button } from "@mui/material";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid2,
} from "@mui/material";
import { TextField, Typography, Rating } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ContentPasteOffSharp, ShoppingCart } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import config from "../config";

const product = {
  name: "Stylish Shirt",
  price: "$120.00",
  description:
    "High-quality stylish sneakers with a comfortable fit and modern design.What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  images: ["https://storage.googleapis.com/rd-ecommerce-app/t_black.jpg"],
  colors: ["Red", "Blue", "Black"],
  sizes: ["7", "8", "9", "10", "11"],
  stock: 30,
  rating: 1.5,
};

export default function ProductDetails() {
  const { productId } = useParams();
  const [groupedData, setGroupedData] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [availableSizes, setAvailableSizes] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [baseProduct, setBaseProduct] = useState({});
  const [rating, setRating] = useState();



  useEffect(() => {
    if (productId) {
      axios
        .get(config.SERVER_PRODUCT_URL + `p/sku/${productId}`)
        .then((response) => {
          const data = response.data.data;

          // Group products by color
          const grouped = data.reduce((acc, item) => {
            if (!acc[item.color]) {
              acc[item.color] = {
                color: item.color,
                image: item.image,
                items: [],
              };
            }
            acc[item.color].items.push({
              size: item.size,
              code: item.code,
              image: item.image,
            });
            return acc;
          }, {});

          setGroupedData(grouped);

          // Set initial default selections
          const initialColor = Object.keys(grouped)[0]; // First color
          setSelectedColor(initialColor);
          setAvailableSizes(grouped[initialColor].items);
          setSelectedSize(grouped[initialColor].items[0]?.size || "");
          setSelectedImage(grouped[initialColor].image);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    } else {
      console.log("categoryName is undefined or empty");
    }

    // 7777777777777777777777777777777777777777777

    if (productId) {
      axios
        .get(config.SERVER_PRODUCT_URL + `p/get/${productId}`)
        .then((response) => {
          const data = response.data.data[0];
          setBaseProduct(data)
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    } else {
      console.log("categoryName is undefined or empty");
    }
  }, []);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setAvailableSizes(groupedData[color].items);
    setSelectedSize(groupedData[color].items[0]?.size || "");
    setSelectedImage(groupedData[color].image);
  };

  // Handle "Add to Cart" action
  const handleAddToCart = () => {
    alert(
      `Added to Cart: Color - ${selectedColor}, Size - ${selectedSize}, Quantity - ${quantity}`
    );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
              <div
                style={{ display: "flex", flexDirection: "row", gap: "20px" }}
              >
                <div style={{ flex: 2 }}>
                  <img
                    src={`${config.SERVER_IMAGE_URL}${selectedImage}`}
                    alt={selectedColor}
                    width="500"
                    height="500"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <div style={{ flex: 3 }}>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                      }}
                    >
                      <div style={{ flex: 3 }}>
                        <Typography variant="h5" fontWeight="bold">
                          {baseProduct.name}
                        </Typography>
                        <Typography variant="h6" color="primary">
                          ${baseProduct.price}
                        </Typography>
                        <Rating
                          precision={0.5}
                          value={rating}
                          onChange={(e) => setRating(Number(e.target.value))}
                        />
                      </div>
                      <Typography
                        variant="body2"
                        color="success"
                        sx={{ mt: 1 }}
                        style={{ flex: 1 }}
                      >
                        {product.stock > 0 ? (
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: "20px",
                              textAlign: "center",
                            }}
                          >
                            🟢 In Stock
                          </p>
                        ) : (
                          <p style={{ fontWeight: "bold", color: "Red" }}>
                            🔴 Out of Stock
                          </p>
                        )}
                      </Typography>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                      }}
                    >
                      <FormControl fullWidth sx={{ mt: 2 }} style={{ flex: 1 }}>
                        <Typography variant="subtitle1">Color</Typography>
                        <Select
                          fullWidth
                          value={selectedColor}
                          onChange={(e) => handleColorChange(e.target.value)}
                          sx={{ marginBottom: 2 }}
                        >
                          {Object.keys(groupedData).map((color) => (
                            <MenuItem key={color} value={color}>
                              {color}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {/* ------------------------- */}

                      {/* ------------------------- */}
                      <FormControl fullWidth sx={{ mt: 2 }} style={{ flex: 1 }}>
                        <Typography variant="subtitle1">Size:</Typography>
                        <Select
                          fullWidth
                          value={selectedSize}
                          onChange={(e) => setSelectedSize(e.target.value)}
                          sx={{ marginBottom: 2 }}
                        >
                          {availableSizes.map((item) => (
                            <MenuItem key={item.code} value={item.size}>
                              {item.size}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <FormControl fullWidth sx={{ mt: 2 }} style={{ flex: 1 }}>
                        <Typography variant="subtitle1">Quantity:</Typography>
                        <TextField
                          fullWidth
                          style={{ flex: 1 }}
                          type="number"
                          inputProps={{ min: 1, max: 5 }}
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                      </FormControl>

                      <CardActions style={{ flex: 1 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          sx={{ mt: 3, p: 2 }}
                          startIcon={<ShoppingCart />}
                          onClick={handleAddToCart}
                        >
                          Add to Cart
                        </Button>
                      </CardActions>
                    </div>
                  </CardContent>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    gutterBottom
                  >
                    {product.description}
                  </Typography>
                </div>
              </div>
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
}
