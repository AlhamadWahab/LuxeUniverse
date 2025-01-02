import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";

function Checkout() {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(true);
  const [payMethodToggle, setPayMethodToggle] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const cart = useSelector((state) => state.cart);
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zipCode: "",
  });
  return (
    <>
      <div className="  bg-slate-300  constainer mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
        <div className="text-2xl font-semibold mb-4">
          <h3>CHECKOUT</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              {/** Billing Toggle */}
              <div className="border p-2 mb-6">
                <div
                  className="flex items-center justify-between hover:cursor-pointer"
                  onClick={() => setBillingToggle(!billingToggle)}
                >
                  <h3 className="text-lg font-semibold mb-2">
                    Billing Information
                  </h3>
                  {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                </div>
                <div className={`space-y4 ${billingToggle ? "" : "hidden"}`}>
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      Name
                    </label>
                    <input
                      type="text"
                      name="text"
                      placeholder="Enter Name"
                      className="w-full px-3 py-2 border"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      name="text"
                      placeholder="Enter E-Mail"
                      className="w-full px-3 py-2 border"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      Phone
                    </label>
                    <input
                      type="number"
                      name="text"
                      placeholder="Enter Phone"
                      className="w-full px-3 py-2 border"
                    />
                  </div>
                </div>
              </div>
              {/** Shipping Toggle */}
              <div className="border p-2 mb-6">
                <div
                  className="flex items-center justify-between hover:cursor-pointer"
                  onClick={() => setShippingToggle(!shippingToggle)}
                >
                  <h3 className="text-lg font-semibold mb-2">
                    Shipping Information
                  </h3>
                  {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                </div>
                <div className={`space-y4 ${shippingToggle ? "" : "hidden"}`}>
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      Address
                    </label>
                    <input
                      type="text"
                      name="text"
                      placeholder="Enter Address"
                      className="w-full px-3 py-2 border"
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      City
                    </label>
                    <input
                      type="text"
                      name="text"
                      placeholder="Enter City"
                      className="w-full px-3 py-2 border"
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          ctiy: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      Zip-Code
                    </label>
                    <input
                      type="number"
                      name="text"
                      placeholder="Enter Zip-Code"
                      className="w-full px-3 py-2 border"
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          zipCode: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              {/** Pay Methods */}
              <div className="border p-2 mb-6">
                <div
                  className="flex items-center justify-between hover:cursor-pointer"
                  onClick={() => setPayMethodToggle(!payMethodToggle)}
                >
                  <h3 className="text-lg font-semibold mb-2">
                    Payment Methods Information
                  </h3>
                  {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                </div>
                <div className={`space-y4 ${payMethodToggle ? "" : "hidden"}`}>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                    />{" "}
                    <label className="block text-gray-700 ms-2" htmlFor="">
                      Cash on Delivary{" "}
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "dc"}
                      onChange={() => setPaymentMethod("dc")}
                    />{" "}
                    <label className="block text-gray-700 ms-2" htmlFor="">
                      Card{" "}
                    </label>
                  </div>
                  {paymentMethod == "dc" && (
                    <>
                      <div className="bg-gray-200 p-4 rounded-lg mb-4">
                        <h3 className="text-3xl font-semibold mb-4">
                          Card Information
                        </h3>
                        <div className="flex justify-between text-xl font-semibold mb-4">
                          <label htmlFor="">Card Number</label>
                          <input type="text" placeholder="Card Number" />
                        </div>
                        <div className="flex justify-between text-xl font-semibold mb-4">
                          <label htmlFor="">Card Holder Name</label>
                          <input type="text" placeholder="Holder Name" />
                        </div>
                        <div className="flex justify-between text-xl font-semibold mb-4">
                          <label htmlFor="">Expire Date</label>
                          <input type="text" placeholder="MM/YY" />
                        </div>
                        <div className="flex justify-between text-xl font-semibold mb-4">
                          <label htmlFor="">CVV</label>
                          <input type="text" placeholder="CVV" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/** Total Cart Infos */}
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-3xl font-semibold mb-5">CART TOTAL</h3>
              <div>
                {cart.products.map((product) => (
                  <>
                    <div key={product.id} className="flex justify-between">
                      <div className="flex items-center mb-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-contain rounded"
                        />
                        <div className="ml-4">
                          <h4 className="text-md font-semibold">
                            {product.name}
                          </h4>
                          <p className="text-gray-600">
                            {product.price}€ x {product.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div>
                <div>
                  <span className="font-bold">Total Price: </span>
                  <span className="text-red-500 font-bold">
                    €{cart.totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
              <br />
              <br />
              <hr></hr>
              <button className="w-full bg-fuchsia-600 text-white py-2 mt-4 hover:bg-red-500">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
