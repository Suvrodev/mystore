import { Link } from "react-router";
import { TProduct } from "../../../../types/globalType";

interface IProps {
  product: TProduct;
}
const ProductCard = ({ product }: IProps) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 shadow-2xl rounded-lg p-6 flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-3xl">
      <img
        src={product.image}
        alt={product.title}
        className="w-40 h-40 object-contain mb-4"
      />
      <h2 className="text-xl font-bold text-white text-center">
        {product.title}
      </h2>
      <p className="text-purple-200 text-sm text-center mt-1">
        {product.category}
      </p>
      <p className="text-white font-bold text-2xl mt-2">${product.price}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-400 text-lg">⭐</span>
        <span className="text-yellow-400 ml-1">{product.rating.rate}</span>
        <span className="text-purple-200 text-sm ml-2">
          ({product.rating.count} reviews)
        </span>
      </div>
      <Link to={`/product-detail/${product?.id}`}>
        <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-full mt-4 hover:bg-purple-100 transition-colors">
          Show Detail
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
