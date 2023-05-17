import { configureStore } from "@reduxjs/toolkit";
import productsSilce from "./slices/products.silce";
import isLoadingSlice from "./slices/isLoading.slice";

export default configureStore({
  reducer: {
    products: productsSilce,
    isLoading: isLoadingSlice,
  },
});
