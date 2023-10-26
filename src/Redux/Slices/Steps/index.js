import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  totalSteps: 3,
};

export const StepSlice = createSlice({
  name: "Step",
  initialState,
  reducers: {
    updateStep(state, { payload }) {
      return { ...state, step: payload };
    },
  },
});

export const { updateStep } = StepSlice.actions;

export const StepSelector = (store) => store.Step;

export default StepSlice.reducer;
