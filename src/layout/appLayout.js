import React, { useState } from "react";
import { Grid, Layout, Menu } from "antd";
import PropTypes from "prop-types";

import SiderCustom from "../components/layoutAdminComponent/Sider";
import HeaderCustom from "../components/layoutAdminComponent/Header";
import HeaderMobile from "../components/layoutAdminComponent/HeaderMobile";
import SiderMobile from "../components/layoutAdminComponent/SiderMobile";

const { Content } = Layout;

const AppLayout = ({ navTree, children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = !Grid.useBreakpoint().md;

  return (
    <Layout>
      {isMobile ? (
        <>
          <HeaderMobile collapsed={collapsed} setCollapsed={setCollapsed} />
          <SiderMobile
            collapsed={collapsed}
            navTree={navTree}
            setCollapsed={setCollapsed}
          />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
            }}
          >
            {children}
          </Content>
        </>
      ) : (
        <>
          <SiderCustom navTree={navTree} collapsed={collapsed} />
          <Layout className="site-layout">
            <HeaderCustom collapsed={collapsed} setCollapsed={setCollapsed} />
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
              }}
            >
              {children}
            </Content>
          </Layout>
        </>
      )}
    </Layout>
  );
};

AppLayout.propTypes = {
  navTree: PropTypes.arrayOf(PropTypes.object),
};

export default AppLayout;
