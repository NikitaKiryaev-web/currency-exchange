import { createSlice,} from "@reduxjs/toolkit";

const initialState = {
  fromType: "all",
  toType: "all",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFromFilter(state, action) {
      state.fromType = action.payload;
    },
    changeToFilter(state, action) {
      state.toType = action.payload;
    },
  },
});

export default filterSlice.reducer;
