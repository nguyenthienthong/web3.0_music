import { ADD_PRODUCT, DELETE_PRODUCT } from "../constants/cartConst";

const initialState = {
  cart: [],
  isLoading: false,
};

const cartReducer = (state = initialState, action) => {
  const { payload } = action;
  let newCart = [...state.cart];
  switch (action.type) {
    case ADD_PRODUCT:
      const item = state.cart.findIndex((prod) => prod?.id === payload._id);
      if (item < 0) {
        newCart = [
          ...newCart,
          {
            id: payload._id,
            item: payload,
            quantity: 1,
          },
        ];
      }
      return { ...state, cart: newCart };
    case DELETE_PRODUCT:
      const id = action.payload;
      const itemIndex = state.cart.findIndex((e) => e?.id === id);
      if (itemIndex >= 0) {
        state.cart = newCart.filter((_, index) => index !== itemIndex);
      }
      return {
        ...state,
        cart: newCart.filter((_, index) => index !== itemIndex),
      };

    default:
      return state;
  }
};

export default cartReducer;
