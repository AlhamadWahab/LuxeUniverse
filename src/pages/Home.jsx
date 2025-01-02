import { categories, mockData } from "../assets/db/mockData";
import onlineShopping from "../assets/img/shop-wit-me.jpg";
import Information from "../components/Information";
import Categories from "../components/Categories";
import { addProducts } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(addProducts(mockData));
  }, []);
  return (
    <>
      <div className="bg-white mt-2 px-4 md:py-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4">
          {/* Home Pic Section */}
          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img
              src={onlineShopping}
              alt="heroPic"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute top-1/4 left-8 text-black max-w-md">
              <br />
              <div className="w-full h-14 text-center bg-gray-400 p-2 bg-opacity-70">
                <h2 className="text-4xl font-bold mb-4">
                  Welcome to{" "}
                  <span className="hover:text-orange-400">
                    Lu
                    <span className="text-3xl text-red-700 hover:text-black">
                      xeUni
                    </span>
                    verse
                  </span>
                </h2>
              </div>
              <br />
              <button className="bg-red-500 bg-opacity-70  text-white px-8 py-2 font-semibold hover:bg-red-950 rounded-lg hover:scale-105 transform transition-transform duration-300">
                Let’s Shop
              </button>
            </div>
          </div>
          {/* Categories Section */}
          <div className="w-full md:w-3/12">
            <div className="bg-fuchsia-500 text-white text-xs font-bold px-2 py-2.5">
              SHOP BY CATEGORIES
            </div>
            <ul className="space-y-4 bg-gray-100 p-3 border">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium"
                >
                  <div className="w-2 h-2 border border-red-300 rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Categories Section */}
        <Categories />
        {/* Information Section */}
        <Information />
        {/* Top Products Section */}
        <div className="container mx-auto  py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5	gap-6 cursor-pointer">
            {products.products.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="bg-slate-100 container mx-auto py-2 ">
          <Shop />
        </div>
      </div>
    </>
  );
};

export default Home;
