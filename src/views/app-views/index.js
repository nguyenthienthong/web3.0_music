import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/layoutComponent/Footer/Footer";
import Header from "../../components/layoutComponent/Header/Header";
import Sidebar from "../../components/layoutComponent/Sidebar/Sidebar";
import NotFound from "../notFound/404";
import Detail_items from "./Detail_items";
import Home from "./Home";
const { Content } = Layout;
const AppViews = () => {
  return (
    <Layout>
      <Header />
      <main id="main_container">
        <Sidebar />
        <Content id="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/detail" element={<Detail_items />}></Route>
          </Routes>
        </Content>
      </main>
      {/* <Footer /> */}
    </Layout>
  );
};

export default AppViews;
