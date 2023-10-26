import { createSlice } from "@reduxjs/toolkit";
import { Validate } from "./thunk";

const initialState = {
  password: "",
  email: "",
};

export const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    updatePassword(state, { payload }) {
      return { ...state, password: payload };
    },
    updateEmail(state, { payload }) {
      return { ...state, email: payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Validate.fulfilled, (state, { payload }) => {
      // payload.handleSucces();
      return { ...state, email: "", password: "", data: payload.data };
    });
    builder.addCase(Validate.rejected, (state, { meta, payload }) => {
      meta.arg.handleError();
      return { ...state, email: "", password: "" };
    });
  },
});

export const { updatePassword, updateEmail } = LoginSlice.actions;

export const LoginSelector = (store) => store.Login;

export default LoginSlice.reducer;
