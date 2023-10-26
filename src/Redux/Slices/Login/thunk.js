import { createAsyncThunk } from "@reduxjs/toolkit";
import Login from "../../../Api/Providers/Login";

export const Validate = createAsyncThunk(
  "Login/validate",
  async ({ email, password, handleSucces, handleError }, thunkApi) => {
    try {
      const { data } = await Login({ password, email });
      return { data, handleSucces, handleError };
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
