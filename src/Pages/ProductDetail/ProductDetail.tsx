import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TProduct } from "../../types/globalType";
import LoadingPage from "../Shared/LoadingPage/LoadingPage";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<TProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch {
        setError("Failed to fetch product data.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-2xl">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Product Detail
      </h1>

      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-8 md:space-y-0">
        {/* Product Image */}
        <div className="w-full md:w-1/2 relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-auto rounded-lg shadow-lg transform transition-all hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">{product?.title}</h2>
          <p className="text-lg text-purple-600 font-semibold">
            {product?.category}
          </p>
          <p className="text-md text-gray-700 leading-relaxed truncate">
            {product?.description}
          </p>

          {/* Price and Rating */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-blue-600">
                ${product?.price}
              </span>
              <span className="text-sm text-gray-500">
                ({product?.rating.count} reviews)
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500 text-2xl">
                {"★".repeat(Math.floor(product?.rating.rate || 0))}
              </span>
              <span className="text-gray-300 text-2xl">
                {"★".repeat(5 - Math.floor(product?.rating.rate || 0))}
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
