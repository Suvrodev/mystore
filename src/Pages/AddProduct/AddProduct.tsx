import { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import axios from "axios";
import { toast } from "sonner";
import { sonarId } from "../../types/sonarId";

const AddProductPage = () => {
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
    toast.loading("Adding Product", { id: sonarId });
    axios
      .post("https://fakestoreapi.com/products", productData)
      .then((response) => {
        console.log("Product added:", response.data);
        if (response?.data) {
          toast.success("Product Added successfully", { id: sonarId });

          // Reset the form
          setTitle("");
          setPrice(0);
          setDescription("");
          setImage("");
          setCategory("");
          setError(""); // Clear any previous error
        }
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        setError("Error adding product, please try again.");
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#F9FAFB", // Light background color
        padding: 3,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 2,
          background: "rgba(255, 255, 255, 0.9)", // Slight opacity for Paper
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#333", fontWeight: "bold", mb: 3 }}
        >
          Add Product
        </Typography>

        {/* Display error message if there's one */}
        {error && (
          <Typography
            variant="body2"
            color="error"
            align="center"
            gutterBottom
            sx={{ mb: 2 }}
          >
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
              sx={{
                mb: 2,
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: 1,
              }}
              InputLabelProps={{ style: { color: "#333" } }}
            />
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              type="number"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              sx={{
                mb: 2,
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: 1,
              }}
              InputLabelProps={{ style: { color: "#333" } }}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{
                mb: 2,
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: 1,
              }}
              InputLabelProps={{ style: { color: "#333" } }}
            />
            <TextField
              label="Image URL"
              variant="outlined"
              fullWidth
              value={image}
              onChange={(e) => setImage(e.target.value)}
              sx={{
                mb: 2,
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: 1,
              }}
              InputLabelProps={{ style: { color: "#333" } }}
            />
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{
                mb: 2,
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: 1,
              }}
              InputLabelProps={{ style: { color: "#333" } }}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              py: 1.5,
              fontWeight: "bold",
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              "&:hover": {
                background: "linear-gradient(45deg, #1976D2 30%, #1E88E5 90%)",
              },
            }}
          >
            Add Product
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddProductPage;
