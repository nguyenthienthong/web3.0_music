import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/layoutComponent/footer";
import Header from "../../components/layoutComponent/header";
import Home from "./Home";
import Search from "./Search";
const { Content } = Layout;
const AppViews = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
        </Routes>
      </Content>
      <Footer />
    </Layout>
  );
};

export default AppViews;
