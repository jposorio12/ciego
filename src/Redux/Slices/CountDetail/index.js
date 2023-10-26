import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  counts: [],
};

export const CountDetailSlice = createSlice({
  name: "CountDetail",
  initialState,
  reducers: {
    updateForm(state, { payload }) {
      return {
        ...state,
        counts: [...state.counts, payload],
      };
    },
    updateId(state, { payload }) {
      return {
        ...state,
        id: payload,
      };
    },
  },
});

export const { updateForm, updateId } = CountDetailSlice.actions;

export const CountDetailSelector = (store) => store.CountDetail;

export default CountDetailSlice.reducer;
