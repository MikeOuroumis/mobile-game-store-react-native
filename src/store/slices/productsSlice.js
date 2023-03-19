import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    purchasedProducts: [],
  },
  reducers: {
    addPurchasedProduct: (state, action) => {
      state.purchasedProducts.push(action.payload);
    },
  },
});

export const { addPurchasedProduct } = productsSlice.actions;
export default productsSlice.reducer;
