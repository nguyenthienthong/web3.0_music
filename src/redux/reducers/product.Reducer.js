import { SELECTED_PRODUCT, SET_PRODUCT } from "../constants/productConst";

const initialState = {
  product: [],
  isLoading: false,
};

const productReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case SET_PRODUCT:
      return { ...state, product: payload.payload };
    case SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};

export default productReducer;
