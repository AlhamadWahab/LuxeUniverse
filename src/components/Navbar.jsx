import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaRegRegistered,
} from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setSearchItem } from "../redux/slices/productSlice";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchItem(search));
    navigate("/filter-data");
  };

  return (
    <>
      <nav className="bg-lime-50 shadow-md">
        {/* first section */}
        <section className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between">
          <div className="mt-3">
            <Link
              to="/"
              className="text-xl from-neutral-800 font-extrabold text-slate-950"
            >
              <span className="hover:text-orange-400">
                Lu
                <span className="text-3xl text-red-700 hover:text-black">
                  xeUni
                </span>
                verse
              </span>
            </Link>
          </div>
          <div className="relative flex-1 mx-4 mt-3">
            <form onSubmit={handleSearch}>
              <input
                className="w-full border py-2 px-4"
                type="text"
                placeholder="Search Product"
                onChange={(e) => setSearch(e.target.value)}
              />
              <FaSearch className="absolute top-3 right-3 text-slate-900 cursor-pointer"></FaSearch>
            </form>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-xl text-black hover:text-orange-400"></FaShoppingCart>
              {products.length > 0 && (
                <span className="absolute top-0 text-xs w-3 left-3 bg-red-500 rounded-full flex justify-center items-center text-white">
                  {products.length}
                </span>
              )}
            </Link>
            <Link to="/login">
              <span className="font-bold from-neutral-800 px-2 text-xl hover:text-orange-400">
                <AiOutlineLogin />
              </span>{" "}
            </Link>
            <Link to="/register">
              <span className="font-bold from-neutral-800 px-2 text-xl hover:text-orange-400">
                <FaRegRegistered />{" "}
              </span>
            </Link>
            <button className="block md:hidden">
              <FaUser className="text-slate-950 text-xl hover:text-orange-400" />
            </button>
          </div>
        </section>
        {/* second section */}
        <section className="flex items-center justify-center space-x-10 font-bold py-4 from-neutral-800">
          <Link to="/" className="hover:underline px-2 hover:text-orange-700">
            Home
          </Link>
          <Link
            to="/shop"
            className="hover:underline px-2 hover:text-orange-700"
          >
            Shop
          </Link>
          <Link
            to="/contact-us"
            className="hover:underline px-2 hover:text-orange-700"
          >
            Contact
          </Link>
          <Link
            to="/about-us"
            className="hover:underline px-2 hover:text-orange-700"
          >
            About
          </Link>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
