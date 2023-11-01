import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterCounts: [],
  filterSkus: [],
};

export const FilterSlice = createSlice({
  name: "Filter",
  initialState,
  reducers: {
    updateFilterCounts(state, { payload }) {
      return {
        ...state,
        filterCounts: payload,
      };
    },
    updateFilterSkus(state, { payload }) {
      return {
        ...state,
        filterSkus: payload,
      };
    },
  },
});

export const { updateFilterCounts, updateFilterSkus } = FilterSlice.actions;

export const FilterSelector = (store) => store.Filters;

export default FilterSlice.reducer;
