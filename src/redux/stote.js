import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducers/index";
import rootSaga from "./sagas/index";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const configStore = (preloadedState) => {
  const store = createStore(
    reducer,
    preloadedState,
    compose(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

const store = configStore();

export default store;
