import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/layoutComponent/footer/Footer";
import Header from "../../components/layoutComponent/header/Header";
import NotFound from "../notFound/404";
import Home from "./Home";
const { Content } = Layout;
const AppViews = () => {
  return (
    <Layout>
      <Header />
      <Content id="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
      </Content>
      <Footer />
    </Layout>
  );
};

export default AppViews;
