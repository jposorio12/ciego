import { combineReducers } from "redux";
import LoginSlice from "../Slices/Login";
import NetworkSlice from "../Slices/Network";
import StepSlice from "../Slices/Steps";
import CountDetailSlice from "../Slices/CountDetail";

const appReducers = combineReducers({
  Login: LoginSlice,
  Network: NetworkSlice,
  Step: StepSlice,
  CountDetail: CountDetailSlice,
});

export const rootReducers = (state, action) => {
  if (action.type === "logOut") {
    const newState = {};
    return appReducers(newState, action);
  }
  return appReducers(state, action);
};
