import { AUTH_BASE } from "../../config/appConfig";
import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LoginView from "./login/loginView";

const AuthView = () => {
  return (
    <Routes>
      <Route path={`/login`} element={<LoginView />} exact />
      <Route path="/" element={<Navigate to={`${AUTH_BASE}/login`} />} />
    </Routes>
  );
};

export default AuthView;
