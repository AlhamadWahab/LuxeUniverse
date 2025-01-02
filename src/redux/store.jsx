import { configureStore } from "@reduxjs/toolkit";
import cart_Slice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    cart: cart_Slice,
    product: productSlice,
  },
});

export default store;
