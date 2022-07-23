import {
  ISGETDATADONE,
  HIDDENTMESSAGE,
  ISGETDATA,
  LOGIN,
  SHOWMESSAGE,
  AUTHENTICATE,
  LOGOUT,
  LOGINGG,
  BUY_PRODUCT,
  DELETE_PRODUCT,
} from "../constants/authConst";

export const loginGg = (user) => {
  return {
    type: LOGINGG,
    data: user,
  };
};
export const login = (user) => {
  return {
    type: LOGIN,
    data: user,
  };
};
export const getData = () => {
  return {
    type: ISGETDATA,
  };
};

export const authentication = (data) => {
  return {
    type: AUTHENTICATE,
    data: data,
  };
};

export const getDataDone = () => {
  return {
    type: ISGETDATADONE,
  };
};

export const showMessage = (message) => {
  return {
    type: SHOWMESSAGE,
    data: message,
  };
};

export const hiddentMessage = () => {
  return {
    type: HIDDENTMESSAGE,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const addToCart = (product) => {
  return {
    type: BUY_PRODUCT,
    data: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: DELETE_PRODUCT,
    data: product,
  };
};

export const adjustQty = (product) => {
  return {
    type: DELETE_PRODUCT,
    data: product,
  };
};
