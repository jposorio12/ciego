import { combineReducers } from "redux";
import LoginSlice from "../Slices/Login";
import NetworkSlice from "../Slices/Network";
import CountDetailSlice from "../Slices/CountDetail";

const appReducers = combineReducers({
  Login: LoginSlice,
  Network: NetworkSlice,
  CountDetail: CountDetailSlice,
});

export const rootReducers = (state, action) => {
  if (action.type === "logOut") {
    const newState = {};
    return appReducers(newState, action);
  }
  return appReducers(state, action);
};
