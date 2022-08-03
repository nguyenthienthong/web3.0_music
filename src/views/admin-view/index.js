import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import AppLayout from "../../layout/appLayout";
import adminNavTree from "../../config/adminNavTree";
import Loading from "../../components/shareComponent/loading/Loading";
import { Route, Routes } from "react-router-dom";
const AdminView = () => {
  const Users = React.lazy(() => import("./User"));
  const { isLogin, user } = useSelector((state) => state.auth);
  if (user?.role !== "ADMIN" || !isLogin) {
    return <Navigate to="/" />;
  }
  return (
    <AppLayout navTree={adminNavTree}>
      <Suspense
        fallback={
          <>
            <Loading />
          </>
        }
      >
        <Routes>
          <Route path="/user" exact element={<Users />}></Route>
        </Routes>
      </Suspense>
    </AppLayout>
  );
};

export default AdminView;
