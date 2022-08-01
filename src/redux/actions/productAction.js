import { SELECTED_PRODUCT, SET_PRODUCT } from "../constants/productConst";

export const setProduct = (products) => {
  return {
    type: SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (products) => {
  return {
    type: SELECTED_PRODUCT,
    payload: products,
  };
};
