import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./reducers/filterSlice";
import currencyListSlice from "./reducers/currencyListSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    currency: currencyListSlice,
  },
});
