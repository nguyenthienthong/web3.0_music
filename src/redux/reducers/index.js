import { combineReducers } from "redux";
import auth from "./authReducer";
import cartReducer from "./cartReducer";
import productReducer from "./product.Reducer";

const reducer = combineReducers({
  auth: auth,
  cartReducer: cartReducer,
  productReducer: productReducer,
});

export default reducer;
