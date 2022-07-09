import { AUTH_BASE } from "@/config/appConfig";
import React from "react";
import { Redirect } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LoginView from "./login/loginView";

const AuthView = () => {
  return (
    <Routes>
      <Route path={`${AUTH_BASE}/login`} exact>
        <LoginView />
      </Route>
      <Route path={AUTH_BASE}>
        <Redirect to={`${AUTH_BASE}/login`} />
      </Route>
    </Routes>
  );
};

export default AuthView;
