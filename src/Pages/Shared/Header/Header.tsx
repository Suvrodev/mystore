import { Link } from "react-router";

const Header = () => {
  return (
    <nav className="bg-blue-600 p-5 text-white flex justify-between shadow-lg">
      <Link to={"/"} className="text-2xl font-bold">
        {" "}
        My Store
      </Link>
      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link to="/products" className="hover:text-gray-200">
          Products
        </Link>
        <Link to="/add-product" className="hover:text-gray-200">
          Add Product
        </Link>
        <Link to="/about" className="hover:text-gray-200">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-200">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
