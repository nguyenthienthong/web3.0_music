import { all } from "redux-saga/effects";
import auth from "./authSaga";
export default function* rootSaga(getState) {
  yield all([auth()]);
}
