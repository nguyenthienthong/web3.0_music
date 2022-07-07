import React from "react";
import { Route, Routes } from "react-router-dom";
import AppViews from "./app-views";
const Views = () => {
  // const isLogin = true;
  return (
    <>
      <Routes>
        <Route path="*" element={<AppViews />} />
      </Routes>
    </>
  );
};

export default Views;
