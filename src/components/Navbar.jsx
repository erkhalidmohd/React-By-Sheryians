import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">MyApp</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/products" className="hover:text-gray-300">
          Products
        </Link>
        <Link to="/cart" className="hover:text-gray-300">
          Cart
        </Link>
        <Link to="/login" className="hover:text-gray-300">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;