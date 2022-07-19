import React from "react";
import { Layout } from "antd";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import "./header.scss";
const HeaderCustom = ({ collapsed, setCollapsed }) => {
  return (
    <Layout.Header className="site-layout-header px-5">
      <HeaderLeft collapsed={collapsed} setCollapsed={setCollapsed} />
      <HeaderRight />
    </Layout.Header>
  );
};

export default HeaderCustom;
