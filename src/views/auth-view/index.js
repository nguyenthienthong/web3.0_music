import "./_login.scss";
import { AUTH_BASE } from "../../config/appConfig";
import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LoginView from "./login/loginView";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import RegisterView from "./register/registerView";

const AuthView = () => {
  const { isLoading, isLogin } = useSelector((state) => state.auth);
  if (isLogin) {
    return <Navigate to="/" />;
  }
  return (
    <Spin spinning={isLoading}>
      <div className="mask"></div>
      <div className="modal"></div>
      <Routes>
        <Route path={`/login`} element={<LoginView />} exact />
        <Route path={`/register`} element={<RegisterView />} exact />
        <Route path="/" element={<Navigate to={`${AUTH_BASE}/login`} />} />
      </Routes>
    </Spin>
  );
};

export default AuthView;
