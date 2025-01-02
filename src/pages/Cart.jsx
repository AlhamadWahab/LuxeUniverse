import { useDispatch, useSelector } from "react-redux";
// import EmptyCart from "";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../components/Modal";
import ChangeAdress from "../components/ChangeAdress";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAdress] = useState("please enter your address ");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-slate-300 constainer mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
        {cart.products.length > 0 ? (
          <div className="text-2xl font-semibold mb-4">
            <h3>YOUR SHOPPING CART</h3>
            <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
              <div className="md:w-2/3">
                <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                  <p>PRODUCTS</p>
                  <div className="flex space-x-8">
                    <p>PRICE</p>
                    <p>OUANTITY</p>
                    <p>SUBTOTAL</p>
                    <p>REMOVE</p>
                  </div>
                </div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt=""
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-9 items-center">
                      <p>{product.price}€</p>
                      <div className="flex items-center justify-center border">
                        <button
                          className="text-xl font-bold px-1.5 border-r text-red-400 hover:text-red-800"
                          onClick={() => dispatch(decreaseQuantity(product))}
                        >
                          -
                        </button>
                        <p>{product.quantity}</p>
                        <button
                          className="text-green-400 hover:text-green-800"
                          onClick={() => dispatch(increaseQuantity(product))}
                        >
                          +
                        </button>
                      </div>
                      <p>{(product.quantity * product.price).toFixed(2)}</p>
                      <button
                        className="text-red-500"
                        onClick={() => dispatch(removeFromCart(product))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
                <div className="flex justify-between mb-5 border-b pb-1">
                  <span className="text-sm">Total Items:</span>
                  <span>{cart.totalQuantity}</span>
                </div>
                <div className="mb-4 border-b pb-2">
                  <p className="ml-2">
                    Shipping to: <span className="font-bold">{address}</span>
                  </p>
                  <button
                    className="text-blue-500 hover:underline mt-1 ml-2"
                    onClick={() => setIsModelOpen(true)}
                  >
                    change adress
                  </button>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Total Price:</span>
                  <span>€{cart.totalPrice.toFixed(2)}</span>
                </div>
                <button
                  className="w-full bg-red-500 text-white py-2 hover:bg-red-900"
                  onClick={() => navigate("/checkout")}
                >
                  Proced to checkout:
                </button>
              </div>
            </div>
            <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
              {" "}
              <ChangeAdress
                setAdress={setAdress}
                setIsModelOpen={setIsModelOpen}
              />
            </Modal>
          </div>
        ) : (
          <div className="flex justify-center">
            <img
              src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png"
              className="h-96"
              alt="no products at the cart"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
