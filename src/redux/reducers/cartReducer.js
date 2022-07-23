import { BUY_PRODUCT, DELETE_PRODUCT } from "../constants/authConst";

const initialState = {
  cartAr: [],
};

const cartReducer = (state = initialState, payload) => {
  switch (payload.type) {
    // case BUY_PRODUCT:
    //   const productInCart = state.cartAr.find((e) => e.id === payload.data.id);
    //   if (!productInCart) {
    //     return { cartAr: [...state.cartAr, payload.data] };
    //   } else {
    //     let newcart = state.cartAr;
    //     const objIndex = newcart.findIndex((e) => e.id === payload.data.id);
    //     if (newcart[objIndex].quantily === undefined) {
    //       newcart[objIndex].quantily = 2;
    //     } else {
    //       newcart[objIndex].quantily = newcart[objIndex].quantily + 1;
    //     }
    //     return { cartAr: [...newcart] };
    //   }
    // case DELETE_PRODUCT:
    //   let newcart = state.cartAr;
    //   const objIndex = newcart.findIndex((e) => e.id === payload.data.id);
    //   newcart.splice(objIndex, 1);
    //   return { cartAr: [...newcart] };
    // default:
    //   break;
    case BUY_PRODUCT:
      return {};
    case DELETE_PRODUCT:
      return {};

    default:
      return state;
  }
};

export default cartReducer;
