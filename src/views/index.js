import React from "react";
import { Route, Routes } from "react-router-dom";
import AppViews from "./app-views";
import { BrowserRouter } from "react-router-dom";

const Views = () => {
  // const isLogin = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppViews />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Views;
