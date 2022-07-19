import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const HeaderLeft = ({ collapsed, setCollapsed }) => {
  return (
    <div className="header_left">
      <Button
        type="text"
        onClick={() => setCollapsed(!collapsed)}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      ></Button>
    </div>
  );
};

export default HeaderLeft;
