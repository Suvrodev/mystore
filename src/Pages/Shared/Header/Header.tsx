import { Link, useLocation } from "react-router";
import { navLinks } from "../../../Array/HeaderArray";

const Header = () => {
  const loc = useLocation()?.pathname;
  // console.log("Loc: ", loc);
  return (
    <nav className="bg-blue-600 p-5 text-white flex justify-between shadow-lg">
      <Link to={"/"} className="text-2xl font-bold">
        {" "}
        My Store
      </Link>
      <div className="space-x-6 text-lg">
        {/* <Link to="/" className="hover:text-gray-200">
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
        </Link> */}
        {navLinks.map((data, idx) => (
          <Link to={data?.to} key={idx} className="relative">
            {data?.label}
            <span
              className={`h-[2px] w-full absolute -bottom-1 left-0 ${
                loc === data?.to ? " bg-white" : ""
              }`}
            ></span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
