import {
  ISGETDATADONE,
  HIDDENTMESSAGE,
  ISGETDATA,
  LOGIN,
  SHOWMESSAGE,
  AUTHENTICATE,
  LOGOUT,
  LOGINGG,
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
