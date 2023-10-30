import { createAsyncThunk } from "@reduxjs/toolkit";
import CreateCount from "../../../Api/Providers/CreateCount";

export const create = createAsyncThunk(
  "CountDetail/create",
  async ({ data, handleSucces, handleError }, thunkApi) => {
    try {
      const res = await CreateCount(data);
      return { res, handleSucces, handleError };
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
