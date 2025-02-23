import { useEffect, useState, useCallback } from "react";
import { TProduct } from "../../types/globalType";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductPage = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Use useCallback to memoize the fetchProducts function
  const fetchProducts = useCallback(() => {
    axios
      .get<TProduct[]>(`https://fakestoreapi.com/products?sort=${sortOrder}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [sortOrder]); // `sortOrder` is now a dependency

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]); // Using fetchProducts as dependency

  const handleDelete = (productId: number) => {
    axios
      .delete(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        console.log(response.data);
        setProducts((prevProducts) =>
          prevProducts.filter((p) => p.id !== productId)
        );
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Product Page
      </Typography>

      {/* Sort Button */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <IconButton
          onClick={handleSort}
          sx={{
            backgroundColor: sortOrder === "asc" ? "#4caf50" : "#f44336", // Green for asc, Red for desc
            color: "#fff",
            "&:hover": {
              backgroundColor: sortOrder === "asc" ? "#388e3c" : "#d32f2f",
            },
            padding: "10px 20px",
            borderRadius: "4px",
          }}
        >
          <Typography>
            {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
          </Typography>
        </IconButton>
      </Box>

      {/* Product Table with Gradient Background */}
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          background: "linear-gradient(135deg, #4c6ef5, #9d4edd)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f0f0f0" }}>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}
              >
                Image
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}
              >
                Category
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}
              >
                Description
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}
              >
                Price
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}
              >
                Rating
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}
              >
                Reviews
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product, index) => (
              <TableRow
                key={product.id}
                sx={{
                  "&:hover": { backgroundColor: "#e6e6e6" },
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#f7f7f7",
                  transition: "background-color 0.3s ease",
                }}
              >
                <TableCell sx={{ fontSize: "0.95rem", color: "#333" }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "4px",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ fontSize: "0.95rem", color: "#333" }}>
                  {product.title}
                </TableCell>
                <TableCell sx={{ fontSize: "0.95rem", color: "#555" }}>
                  {product.category}
                </TableCell>
                <TableCell sx={{ fontSize: "0.95rem", color: "#777" }}>
                  {product.description}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "0.95rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  ${product.price}
                </TableCell>
                <TableCell sx={{ fontSize: "0.95rem", color: "#555" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <StarIcon sx={{ color: "#ffc107", fontSize: "1.2rem" }} />
                    <Typography sx={{ ml: 1, color: "#333" }}>
                      {product.rating.rate}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontSize: "0.95rem", color: "#555" }}>
                  {product.rating.count}
                </TableCell>
                <TableCell sx={{ fontSize: "0.95rem", color: "#555" }}>
                  <IconButton onClick={() => handleDelete(product.id)}>
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductPage;
