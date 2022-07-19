import React from "react";
import { Route, Routes } from "react-router-dom";
import AppViews from "./app-views";
import { BrowserRouter } from "react-router-dom";
import { ADMIN_BASE, APP_BASE, AUTH_BASE } from "../config/appConfig";
import AuthView from "./auth-view";
import { Navigate } from "react-router";
// import { AUTH_BASE } from "../config/appConfig";
import { useDispatch, useSelector } from "react-redux";
import AdminView from "./admin-view";

const switchRouter = (role) => {
  switch (role) {
    case "ADMIN":
      return ADMIN_BASE;
    case "USER":
      return APP_BASE;

    default:
      return APP_BASE;
  }
};
const Views = (props) => {
  const { isLoading, isLogin, message, user } = useSelector(
    (state) => state?.auth
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<Navigate to={switchRouter(user?.role)} />}
        ></Route>

        <Route path={`${ADMIN_BASE}/*`} element={<AdminView />}></Route>

        <Route path={`${AUTH_BASE}/*`} element={<AuthView />} />
        <Route path={`${APP_BASE}/*`} element={<AppViews />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Views;
