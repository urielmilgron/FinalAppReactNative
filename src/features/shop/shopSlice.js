import { createSlice } from "@reduxjs/toolkit";
import categories from "../../data/categories";
import products from "../../data/products";

const initialState = {
  categories: categories,
  products: products,
  productsFilteredByCategory: [],
  categorySelected: null,
  productIdSelected: null,
};

export const marketSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload;
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setProductIdSelected } =
  marketSlice.actions;

export default marketSlice.reducer;
