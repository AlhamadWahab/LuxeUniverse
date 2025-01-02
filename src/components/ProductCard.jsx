import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { addToCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
  };
  return (
    <>
      {/* <Link to={`/product/${product.id}`}> */}
      <div className="bg-lime-50 p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105 ">
        <img
          className="w-full h-48 object-contain mb-4"
          src={product.image}
          alt="pic come soon .."
        />
        <h3 className="text-lg font-mono">{product.name}</h3>
        <p className="text-gray-600">{product.price}€</p>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-400"></FaStar>
          <FaStar className="text-yellow-400"></FaStar>
          <FaStar className="text-yellow-400"></FaStar>
          <FaStar className="text-yellow-400"></FaStar>
        </div>
        <div
          className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-fuchsia-300 group text-white text-sm rounded-full hover:w-32 hover:bg-red-500 transition-all"
          onClick={(e) => {
            handleAddToCart(e, product);
          }}
        >
          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:block">add to cart now</span>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
