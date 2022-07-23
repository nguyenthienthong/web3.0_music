import { AUTH_TOKEN } from "../../config/appConfig";
import authService from "../../services/authService";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import {
  authentication,
  getDataDone,
  showMessage,
} from "../actions/authAction";
import { LOGIN, LOGINGG, PROFILE } from "../constants/authConst";

export function* loginGg() {
  yield takeEvery(LOGINGG, function* ({ data }) {
    try {
      const res = yield call(authService.loginGoogle, data);
      console.log(authService);
      if (res.status === "Failed") {
        throw new Error(res.message);
      }
      localStorage.setItem(AUTH_TOKEN, res.data.tokens.accessToken);
      localStorage.setItem(PROFILE, JSON.stringify(res.data.user));
      yield put(getDataDone());
      yield put(authentication(res.data.user));
      yield put(showMessage({ type: "success", message: "Login success" }));
    } catch (error) {
      yield put(showMessage({ type: "error", message: error.message }));
    }
  });
}

export function* login() {
  yield takeEvery(LOGIN, function* ({ data }) {
    try {
      const res = yield call(authService.loginUser, data);
      if (res.status === "Failed") {
        throw new Error(res.message);
      }
      localStorage.setItem(AUTH_TOKEN, res.data.tokens.accessToken);
      localStorage.setItem(PROFILE, JSON.stringify(res.data.user));
      yield put(getDataDone());
      yield put(authentication(res.data.user));
      yield put(showMessage({ type: "success", message: "Login success" }));
    } catch (error) {
      yield put(showMessage({ type: "error", message: error.message }));
    }
  });
}

export default function* rootauth() {
  yield fork(login);
  yield fork(loginGg);
}
