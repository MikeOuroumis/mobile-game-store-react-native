import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  credits: 1000,
  currency: 300,
};

const creditsSlice = createSlice({
  name: "creditsSlice",
  initialState,
  reducers: {
    setCredits: (state, action) => {
      state.credits = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { setCredits, setCurrency } = creditsSlice.actions;
export default creditsSlice.reducer;
