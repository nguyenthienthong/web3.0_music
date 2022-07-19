import { getSortName } from "../../../../utils/utils";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../redux/actions/authAction";
const HeaderRight = (props) => {
  const { isMobile } = props;
  const { user } = useSelector((state) => state.auth);
  const dispath = useDispatch();
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
    <div className="header_right">
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        arrow={{ pointAtCenter: true }}
      >
        <Button
          type="text"
          style={{ height: "max-content" }}
          icon={
            <Avatar src={user?.avatarUrl}>{getSortName(user?.fullName)}</Avatar>
          }
        >
          {!isMobile && <span className="ml-1">Xin chào,{user?.fullName}</span>}
        </Button>
      </Dropdown>
    </div>
  );
};

export default HeaderRight;
