import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate form fields
    if (!title || !price || !description || !image || !category) {
      setError("All fields are required");
      return;
    }

    // Prepare product data
    const productData = {
      title,
      price,
      description,
      image,
      category,
    };

    // Post product data to the API
    axios
      .post("https://fakestoreapi.com/products", productData)
      .then((response) => {
        console.log("Product added:", response.data);
        // Optionally, reset the form or show a success message
        setTitle("");
        setPrice(0);
        setDescription("");
        setImage("");
        setCategory("");
        setError(""); // Clear any previous error
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        setError("Error adding product, please try again.");
      });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Add Product
      </Typography>

      {/* Display error message if there's one */}
      {error && (
        <Typography variant="body2" color="error" align="center" gutterBottom>
          {error}
        </Typography>
      )}

      {/* Add Product Form */}
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Image URL"
            variant="outlined"
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Category"
            variant="outlined"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{ mb: 2 }}
          />
        </Box>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
