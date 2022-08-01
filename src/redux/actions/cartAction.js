import { ADD_PRODUCT, DELETE_PRODUCT } from "../constants/cartConst";

export const addToCart = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};

export const adjustQty = (product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};
