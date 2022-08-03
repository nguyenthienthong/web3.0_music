import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducers/index";
import rootSaga from "./sagas/index";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "cart",
  storage,
};
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const persistedReducer = persistReducer(
  persistConfig,
  reducer,
  composeEnhancers
);
const configStore = (preloadedState) => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    compose(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

const store = configStore();
export const persistor = persistStore(store);
export default store;
