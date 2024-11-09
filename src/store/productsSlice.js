import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "../utils/halpers/generateId";

const products = generateId();

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
  },

  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },

    editProduct(state, action) {
      let objIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      state.products[objIndex] = action.payload;
    },

    removeProduct(state, action) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },

    filterProduct(state, action) {
      state.products = state.products.filter(
        (item) => item.category === action.payload
      );
    },
  },
});

export const { addProduct, editProduct, removeProduct, filterProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
