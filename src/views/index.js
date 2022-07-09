import React from "react";
import { Route, Routes } from "react-router-dom";
import AppViews from "./app-views";
import { BrowserRouter } from "react-router-dom";
// import { AUTH_BASE } from "../config/appConfig";

// const PrivateRouter = ({ children, isAuth, ...props }) => {
//   if (isAuth) {
//     return <Route {...props}>{children}</Route>;
//   } else {
//     return <Navigate to={`${AUTH_BASE}/login`} />;
//   }
// };

const Views = (props) => {
  // const { isLogin, user } = props;
  console.log(props);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppViews />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Views;
