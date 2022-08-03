import { Layout } from "antd";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import Footer from "../../components/layoutComponent/Footer/Footer";
import Header from "../../components/layoutComponent/header/Header";
import Sidebar from "../../components/layoutComponent/sidebar/Sidebar";
import NotFound from "../notFound/404";
import { useDispatch, useSelector } from "react-redux";
import CartShop from "./CartShop";
import DetailItems from "./Detail_items";
import Home from "./Home";
import Post from "./Post";
import Search from "./Search";
import SearchIndex from "./SearchIndex";
const { Content } = Layout;
const AppViews = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  return (
    <Layout>
      <Header cart={cart} />
      <main id="main_container">
        <Sidebar />
        <Content id="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route
              path="/detail/:paramDetail"
              exact
              element={<DetailItems />}
            ></Route>
            <Route exact path="/post" element={<Post />}></Route>
            <Route exact path="/cart" element={<CartShop />}></Route>
            <Route exact path="/search/:param" element={<Search />}></Route>
            <Route exact path="/search/*" element={<SearchIndex />}></Route>
          </Routes>
        </Content>
      </main>
      {/* <Footer /> */}
    </Layout>
  );
};

export default AppViews;
