import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo";
import MenuSider from "../MenuSider";

const SiderMobile = ({ navTree, collapsed, setCollapsed }) => {
  const [selectKey, setSelectKey] = useState("");
  const location = useLocation();

  useEffect(() => {
    let key = getKeyFromPath(location.pathname);

    setSelectKey(key);
  }, [location, navTree]);

  const getKeyFromPath = (str = "") => {
    for (let j = 0; j < navTree.length; j++) {
      const element = navTree[j];

      if (element?.subMenu) {
        for (let i = 0; i < element.subMenu.length; i++) {
          const e = element.subMenu[i];

          if (str === e.path) {
            return e.key;
          }
        }
      } else {
        if (str === element.path) {
          return element.key;
        }
      }
    }
  };

  return (
    <>
      <Drawer
        title={null}
        placement="right"
        visible={collapsed}
        width={250}
        onClose={() => {
          setCollapsed(false);
        }}
        headerStyle={{ display: "none" }}
        bodyStyle={{ padding: "5px" }}
      >
        <Logo collapsed={true} />
        <Button
          className="sider__close"
          onClick={() => {
            setCollapsed(false);
          }}
          type="text"
        >
          <CloseOutlined />
        </Button>
        <MenuSider navTree={navTree} selectKey={selectKey} />
      </Drawer>
    </>
  );
};

export default SiderMobile;
