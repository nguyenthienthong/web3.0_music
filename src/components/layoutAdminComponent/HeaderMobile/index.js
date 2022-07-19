import { MenuOutlined } from "@ant-design/icons";
import { Button, Col, Layout, Row, Space } from "antd";
import React from "react";
import HeaderRight from "../Header/HeaderRight";

const HeaderMobile = ({ collapsed, setCollapsed }) => {
  return (
    <Layout.Header className="site-layout-header site-layout-header-dblock header__mobile">
      <Row>
        <Col span={12}></Col>
        <Col span={12} className="header__group">
          <Space>
            <HeaderRight isMobile={true} />
            <Button
              type="text"
              className="header__menu"
              onClick={() => setCollapsed(!collapsed)}
            >
              <MenuOutlined />
            </Button>
          </Space>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default HeaderMobile;
