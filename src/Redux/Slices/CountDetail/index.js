import { createSlice } from "@reduxjs/toolkit";
import { create } from "./thunk";

const initialState = {
  id: 1,
  counts: [],
};

export const CountDetailSlice = createSlice({
  name: "CountDetail",
  initialState,
  reducers: {
    updateForm(state, { payload }) {
      return {
        ...state,
        counts: payload,
      };
    },
    updateId(state, { payload }) {
      return {
        ...state,
        id: payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(create.fulfilled, (state, { payload }) => {
      // payload.handleSucces();
      return { ...state };
    });
    builder.addCase(create.rejected, (state, { meta, payload }) => {
      // meta.arg.handleError();
      return { ...state };
    });
  },
});

export const { updateForm, updateId } = CountDetailSlice.actions;

export const CountDetailSelector = (store) => store.CountDetail;

export default CountDetailSlice.reducer;
