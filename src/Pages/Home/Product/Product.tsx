import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { TProduct } from "../../../types/globalType";

const Product = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    axios
      .get<TProduct[]>("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
