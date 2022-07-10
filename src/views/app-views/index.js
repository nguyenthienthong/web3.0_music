import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/layoutComponent/footer";
import Header from "../../components/layoutComponent/header";
import Home from "./Home";
const { Content } = Layout;
const AppViews = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Routes>
          <Route exact path="*" element={<Home />}></Route>
        </Routes>
      </Content>
      <Footer />
    </Layout>
  );
};

export default AppViews;
