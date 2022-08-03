import { AUTH_TOKEN } from "../../config/appConfig";
import {
  AUTHENTICATE,
  HIDDENTMESSAGE,
  ISGETDATA,
  ISGETDATADONE,
  LOGIN,
  LOGOUT,
  PROFILE,
  SHOWMESSAGE,
  LOGINGG,
} from "../constants/authConst";

const initState = {
  isLoading: false,
  isLogin:
    localStorage.getItem(AUTH_TOKEN) && localStorage.getItem(PROFILE)
      ? true
      : false,
  user:
    localStorage.getItem(AUTH_TOKEN) && localStorage.getItem(PROFILE)
      ? JSON.parse(localStorage.getItem(PROFILE))
      : {},
  message: {},
};

const auth = (state = initState, payload) => {
  switch (payload.type) {
    case LOGIN:
      return { ...state, isLoading: true };

    case LOGINGG:
      return { ...state, isLoading: true };

    case ISGETDATA:
      return { ...state, isLoading: true };

    case ISGETDATADONE: {
      return { ...state, isLoading: false };
    }

    case LOGOUT: {
      localStorage.removeItem(AUTH_TOKEN);
      localStorage.removeItem(PROFILE);
      return { ...state, isLogin: false, user: {} };
    }

    case AUTHENTICATE: {
      return {
        ...state,
        isLogin: true,
        user: payload.data,
      };
    }

    case SHOWMESSAGE: {
      return {
        ...state,
        message: payload.data,
      };
    }

    case HIDDENTMESSAGE: {
      return {
        ...state,
        message: {},
      };
    }

    default:
      return state;
  }
};

export default auth;
