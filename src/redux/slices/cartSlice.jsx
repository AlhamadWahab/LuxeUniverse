import { createSlice } from "@reduxjs/toolkit";

// Function to calculate total price and quantity
const calculateTotals = (products) => {
  const totalPrice = products.reduce(
    (acc, product) => acc + product.totalPrice,
    0
  );
  const totalQuantity = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  return { totalPrice, totalQuantity };
};

const initialState = {
  products: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  totalQuantity: 0,
  totalPrice: 0,
};

// Recalculate totals when the cart is loaded
if (initialState.products.length > 0) {
  const totals = calculateTotals(initialState.products);
  initialState.totalQuantity = totals.totalQuantity;
  initialState.totalPrice = totals.totalPrice;
}

const cart_Slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const findProduct = state.products.find((item) => item.id === newItem.id);

      if (findProduct) {
        findProduct.quantity++;
        findProduct.totalPrice = findProduct.quantity * findProduct.price;
      } else {
        const productToAdd = {
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        };
        state.products.push(productToAdd);
      }

      state.totalQuantity++;
      state.totalPrice = state.products.reduce(
        (acc, product) => acc + product.totalPrice,
        0
      );

      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeFromCart(state, action) {
      const newItem = action.payload;
      const findProduct = state.products.find((item) => item.id === newItem.id);

      if (findProduct) {
        state.totalPrice -= findProduct.totalPrice;
        state.totalQuantity -= findProduct.quantity;
        state.products = state.products.filter(
          (item) => item.id !== findProduct.id
        );
      }

      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    increaseQuantity(state, action) {
      const newItem = action.payload;
      const findProduct = state.products.find((item) => item.id === newItem.id);

      if (findProduct) {
        findProduct.quantity++;
        findProduct.totalPrice = findProduct.quantity * findProduct.price;
        state.totalQuantity++;
        state.totalPrice = state.products.reduce(
          (acc, product) => acc + product.totalPrice,
          0
        );
      }

      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    decreaseQuantity(state, action) {
      const newItem = action.payload;
      const findProduct = state.products.find((item) => item.id === newItem.id);

      if (findProduct && findProduct.quantity > 1) {
        findProduct.quantity--;
        findProduct.totalPrice = findProduct.quantity * findProduct.price;
        state.totalQuantity--;
        state.totalPrice = state.products.reduce(
          (acc, product) => acc + product.totalPrice,
          0
        );
      }

      localStorage.setItem("cart", JSON.stringify(state.products));
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cart_Slice.actions;
export default cart_Slice.reducer;
