import { combineReducers } from "redux";
import auth from "./authReducer";
import cartReducer from "./cartReducer";

const reducer = combineReducers({
  auth: auth,
  cartReducer: cartReducer,
});

export default reducer;
