import { Button, Col, Image, Menu, Row } from "antd";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <Row>
        <Col span={3} style={{ textAlign: "center" }} className="navbar-header">
          <Image
            width={120}
            src="https://www.topcv.vn/v3/images/topcv-logo-4.png?v=1.0.1"
          />
        </Col>
        <Col span={15}>
          <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
            <Menu.Item key="mail">Mẫu sv đẹp</Menu.Item>
            <Menu.SubMenu key="SubMenu" title="Mẫu CV miễn phí">
              <Menu.Item key="two">Navigation Two</Menu.Item>
              <Menu.Item key="three">Navigation Three</Menu.Item>
              <Menu.ItemGroup title="Item Group">
                <Menu.Item key="four">Navigation Four</Menu.Item>
                <Menu.Item key="five">Navigation Five</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
          </Menu>
        </Col>
        <Col span={6}>
          <Button type="primary" ghost>
            Đăng nhập
          </Button>
          <Button type="primary">Đăng ký</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
