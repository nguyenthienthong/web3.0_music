import { Col, Menu, Row, Select } from "antd";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { AUTH_BASE } from "../../config/appConfig";
const { Option } = Select;
const Header = () => {
  const dataFakeMusic = [
    { id: 1, name: "Màu nước mắc" },
    { id: 2, name: "Em của ngày hôm qua" },
    { id: 3, name: "Sao cũng được" },
    { id: 4, name: "Big city boy" },
    { id: 5, name: "Thiêu thân" },
    { id: 6, name: "Trốn tìm" },
    { id: 7, name: "Vài câu nói có khiến người thay đổi?" },
    { id: 8, name: "Ai Chung Tình Được Mãi" },
    { id: 9, name: "Diễm Xưa" },
    { id: 10, name: "Tệ Thật, Anh Nhớ Em" },
  ];

  const items = [
    {
      key: "post",
      path: ``,
      title: "Đăng bài viết",
      icon: PlusOutlined,
    },
    {
      key: "login",
      path: `${AUTH_BASE}/login`,
      title: "Đăng nhập",
      icon: UserOutlined,
    },
    {
      key: "register",
      path: ``,
      title: "Đăng ký",
      icon: UserOutlined,
    },
  ];
  return (
    <div className="header">
      <Row>
        <Col span={12} className="navbar-header">
          <Link to="/">
            <img
              style={{ width: "50px" }}
              src="https://static.hopamchuan.com/assets/svg/hopamchuan-logo.svg"
              alt=""
            />
          </Link>

          <Select
            showSearch
            style={{
              borderRadius: "2px",
              width: "80%",
              margin: "auto",
              marginLeft: "10px",
            }}
            size={"large"}
            placeholder="Nhập từ khóa để tìm kiếm"
            optionFilterProp="children"
          >
            {dataFakeMusic.map((e) => {
              return (
                <Option key={e.id} value={e.id}>
                  {e.name}
                </Option>
              );
            })}
          </Select>
        </Col>
        <Col span={12}>
          <Menu
            mode="horizontal"
            style={{
              justifyContent: "flex-end",
              backgroundColor: "#00b14f",
            }}
          >
            {items.map((e) => {
              return (
                <Menu.Item
                  style={{ color: "#fff", fontSize: "1rem", fontWeight: "500" }}
                  icon={<e.icon />}
                  key={e.key}
                >
                  <Link
                    style={{ color: "#fff", textDecoration: "none" }}
                    key={e.key}
                    to={e.path}
                  >
                    {e.title}
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
