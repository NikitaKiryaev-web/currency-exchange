import { createSlice } from "@reduxjs/toolkit";
import { directions } from "../../serverData/directions";

const initialState = {
  fromList: [...directions],
  toList: [...directions],
  filteredToList: [...directions],
  activeFrom: "BTC",
};

export const currencyListSlice = createSlice({
  name: "currencyList",
  initialState,
  reducers: {
    changeFromList(state, action) {
      state.fromList = action.payload;
    },
    setFromCurrency(state, action) {
      state.activeFrom = action.payload;
    },
    changeToList(state, action) {
      state.toList = action.payload;
    },
    changeFilteredToList(state, action) {
      state.filteredToList = action.payload;
    },
  },
});

export default currencyListSlice.reducer;
