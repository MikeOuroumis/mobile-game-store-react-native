import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import creditsSlice from "./slices/creditsSlice";
import productsSlice from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    creditsSlice,
    productsSlice,
  },
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
