import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOnline: navigator.onLine,
};

export const NetworkSlice = createSlice({
  name: "Network",
  initialState,
  reducers: {
    updateNetworkStatus(state, { payload }) {
      return { ...state, isOnline: payload };
    },
  },
});

export const { updateNetworkStatus } = NetworkSlice.actions;

export const NetworkSelector = (store) => store.Network;

export default NetworkSlice.reducer;
