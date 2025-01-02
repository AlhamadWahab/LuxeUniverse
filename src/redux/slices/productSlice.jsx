import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchItem: "",
  filteredData: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.products = action.payload;
    },
    setSearchItem(state, action) {
      state.searchItem = action.payload;
      state.filteredData = state.products.filter((product) =>
        product.name
          .toLowerCase()
          .includes(state.searchItem.toLocaleLowerCase())
      );
    },
  },
});

export const { addProducts, setSearchItem } = productsSlice.actions;
export default productsSlice.reducer;
