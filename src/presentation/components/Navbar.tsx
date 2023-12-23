import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

const Navbar = () => {
  const [cart] = useLocalStorage("cart", [
    ...JSON.parse(localStorage.getItem("cart") || "[]"),
  ]);

  const navigate = useNavigate();

  return (
    <nav className=" max-w-screen-lg mx-auto p-4 flex items-center">
      <h1
        className="font-semibold text-2xl cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Reyhan
        <span className="text-green-700">Store</span>
      </h1>
      <div className="flex items-center ml-8">
        <input
          type="text"
          className="rounded-l-md bg-gray-200 py-1 px-2"
          placeholder="Search..."
        />
        <button className="bg-green-700 p-2 rounded-r-md text-white">
          <FaSearch />
        </button>
      </div>
      <div className="flex-grow"></div>
      <ul className="flex space-x-4 items-center">
        <li className="bg-green-700 px-4 py-1 rounded-full text-white">
          <Link to="/add" className="text-sm">
            Add Product
          </Link>
        </li>

        <li>
          <Link to="/cart" className="text-2xl flex items-center gap-2">
            <FaShoppingCart />
            <span className="text-sm">{cart.length ? cart.length : 0}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
