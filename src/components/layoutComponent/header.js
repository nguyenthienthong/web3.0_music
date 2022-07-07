import { Col, Menu, Row, Select } from "antd";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
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
            <Menu.Item
              style={{ color: "#fff", fontSize: "1rem", fontWeight: "500" }}
              icon={<PlusOutlined />}
              key="post"
            >
              Đăng bài viết
            </Menu.Item>
            <Menu.Item
              style={{ color: "#fff", fontSize: "1rem", fontWeight: "500" }}
              icon={<UserOutlined />}
              key="login"
            >
              Đăng nhập
            </Menu.Item>
            <Menu.Item
              style={{ color: "#fff", fontSize: "1rem", fontWeight: "500" }}
              key="register"
            >
              Đăng ký
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
