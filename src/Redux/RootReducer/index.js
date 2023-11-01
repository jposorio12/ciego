import { combineReducers } from "redux";
import LoginSlice from "../Slices/Login";
import NetworkSlice from "../Slices/Network";
import CountDetailSlice from "../Slices/CountDetail";
import FilterSlice from "../Slices/Filters";

const appReducers = combineReducers({
  Login: LoginSlice,
  Network: NetworkSlice,
  CountDetail: CountDetailSlice,
  Filters: FilterSlice,
});

export const rootReducers = (state, action) => {
  if (action.type === "logOut") {
    const newState = {};
    return appReducers(newState, action);
  }
  return appReducers(state, action);
};
