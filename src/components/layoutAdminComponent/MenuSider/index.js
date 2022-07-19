import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const MenuSider = ({ selectKey, navTree }) => {
  return (
    <Menu
      theme="light"
      mode="inline"
      selectedKeys={selectKey}
      // defaultSelectedKeys={["1"]}
    >
      {navTree.map((element) =>
        element?.subMenu ? (
          <Menu.SubMenu
            key={element.key}
            title={element.title}
            icon={<element.icon />}
          >
            {element.subMenu.map((el) => (
              <Menu.Item key={el.key}>
                <Link to={el.path}>{el.title}</Link>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ) : (
          <Menu.Item key={element.key} icon={<element.icon />}>
            <Link to={element.path}>{element.title}</Link>
          </Menu.Item>
        )
      )}
    </Menu>
  );
};

export default MenuSider;
