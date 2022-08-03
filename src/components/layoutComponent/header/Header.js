import {
  CloseOutlined,
  LogoutOutlined,
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, Button, Drawer, Dropdown, Menu } from "antd";
import "./_header.scss";
import { APP_BASE, AUTH_BASE } from "../../../config/appConfig";
import "./_header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSortName } from "../../../utils/utils";
import { logout } from "../../../redux/actions/authAction";
const Header = (props) => {
  const { cart } = props;
  const [length, setLength] = useState(0);
  const [value, setValue] = useState("");
  const { isLoading, isLogin, message, user } = useSelector(
    (state) => state.auth
  );
  const dispath = useDispatch();
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const timeoutRef = useRef(null);
  useEffect(() => {
    setLength(cart.length);
  }, [length, cart]);

  // useEffect(() => {}, [value]);

  const gotoSearch = (e) => {
    setValue(e);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (value !== "") {
        navigate({
          pathname: `search/${e}`,
        });
      }
    }, 300);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const handleLogout = () => {
    const action = logout();
    dispath(action);
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
          onKeyUp={(e) => gotoSearch(e.target.value)}
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
          <li>
            <Link to={`${APP_BASE}/post`}>Khám phá</Link>
          </li>
          <li>
            <Link to={`${APP_BASE}/post`}>Đăng bài hát</Link>
          </li>
          <li>
            <Link to={`${APP_BASE}`}>Học hợp âm</Link>
          </li>
          <li>
            <Link to={`${APP_BASE}/cart`}>
              Giỏ hàng <span>({length})</span>
            </Link>
          </li>
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
          <li>
            <Link to={`${APP_BASE}/post`}>Khám phá</Link>
          </li>
          <li>
            <Link to={`${APP_BASE}/post`}>Đăng bài hát</Link>
          </li>
          <li>
            <Link to={`${APP_BASE}`}>Học hợp âm</Link>
          </li>
          <li>
            <Link to={`${APP_BASE}/cart`}>
              Giỏ hàng <span>({length})</span>
            </Link>
          </li>
          <Link to={`${AUTH_BASE}/login`} style={{ marginRight: "-10px" }}>
            <UserOutlined />
          </Link>
          <Link to={`${AUTH_BASE}/register`}>
            <WalletOutlined />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
