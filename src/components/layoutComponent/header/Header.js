import {
  CloseOutlined,
  LogoutOutlined,
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Avatar, Button, Drawer, Dropdown, Image, Menu } from "antd";
import "./_header.scss";
import { AUTH_BASE } from "../../../config/appConfig";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSortName } from "../../../utils/utils";
import { logout } from "../../../redux/actions/authAction";
const Header = () => {
  // const dataFakeMusic = [
  // 	{ id: 1, name: "Màu nước mắc" },
  // 	{ id: 2, name: "Em của ngày hôm qua" },
  // 	{ id: 3, name: "Sao cũng được" },
  // 	{ id: 4, name: "Big city boy" },
  // 	{ id: 5, name: "Thiêu thân" },
  // 	{ id: 6, name: "Trốn tìm" },
  // 	{ id: 7, name: "Vài câu nói có khiến người thay đổi?" },
  // 	{ id: 8, name: "Ai Chung Tình Được Mãi" },
  // 	{ id: 9, name: "Diễm Xưa" },
  // 	{ id: 10, name: "Tệ Thật, Anh Nhớ Em" },
  // ];

  // const items = [
  // 	{
  // 		key: "post",
  // 		path: ``,
  // 		title: "Đăng bài viết",
  // 		icon: PlusOutlined,
  // 	},
  // 	{
  // 		key: "login",
  // 		path: `${AUTH_BASE}/login`,
  // 		title: "Đăng nhập",
  // 		icon: UserOutlined,
  // 	},
  // 	{
  // 		key: "register",
  // 		path: ``,
  // 		title: "Đăng ký",
  // 		icon: UserOutlined,
  // 	},
  // ];
  const { isLoading, isLogin, message, user } = useSelector(
    (state) => state.auth
  );
  const dispath = useDispatch();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const handleLogout = () => {
    const action = logout();
    dispath(action);
  };

  const onClose = () => {
    setVisible(false);
  };
  const menu = (
    <Menu className="p-2">
      <Menu.Item key="my-profile" icon={<UserOutlined />}>
        <Link to="/">My Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="header">
      <div className="input_search">
        <div className="search-icon">
          <SearchOutlined />
        </div>
        <input
          aria-invalid="false"
          aria-controls="NavSearch--results"
          aria-multiline="false"
          placeholder="Tìm kiếm bài hát, nghệ sĩ"
          role="searchbox"
          type="text"
        />
        <div className="delete-text search-icon">
          <CloseOutlined />
        </div>
      </div>
      <div className="button_menu" onClick={showDrawer}>
        <MenuOutlined />
      </div>
      <Drawer
        className="drawer"
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
        style={{ zIndex: "9999" }}
        size={"medium"}
        maskClosable={true}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      {isLogin ? (
        <div className="button_header">
          <li>Khám phá</li>
          <li>
            <Link to={`/post`}>Đăng bài hát</Link>
          </li>
          <li>Học hợp âm</li>
          <li>Hỗ trợ</li>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button
              type="text"
              style={{ height: "max-content" }}
              icon={
                <Avatar src={user?.avatarUrl} size="default">
                  {getSortName(user?.fullname)}
                </Avatar>
              }
            ></Button>
          </Dropdown>
        </div>
      ) : (
        <div className="button_header">
          <li>Khám phá</li>
          <li>
            <Link to={`/post`}>Đăng bài hát</Link>
          </li>
          <li>Học hợp âm</li>
          <li>Hỗ trợ</li>
          <Link to={`${AUTH_BASE}/login`} style={{ marginRight: "-10px" }}>
            <UserOutlined />
          </Link>
          <a href="/">
            <WalletOutlined />
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
