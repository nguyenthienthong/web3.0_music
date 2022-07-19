import { Layout, Menu } from "antd";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo";
import MenuSider from "../MenuSider";

const SiderCustom = ({ navTree, collapsed }) => {
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
    <Layout.Sider
      collapsed={collapsed}
      collapsible
      trigger={null}
      theme="light"
    >
      <Logo collapsed={collapsed} />
      <MenuSider selectKey={selectKey} navTree={navTree} />
    </Layout.Sider>
  );
};

SiderCustom.propTypes = {
  navTree: PropTypes.arrayOf(PropTypes.object),
};

export default SiderCustom;
