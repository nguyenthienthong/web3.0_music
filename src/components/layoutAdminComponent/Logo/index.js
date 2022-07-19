import { Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import LogoTeam from "../../../assets/images/logo.png";
import "./logo.scss";
const Logo = ({ collapsed }) => {
  return (
    <div className="app__logo">
      <Link to="/">
        {!collapsed ? (
          <>
            <Image src={LogoTeam} width={40} height={40} preview={false} />{" "}
            <span>SMS</span>
          </>
        ) : (
          <>
            <Image src={LogoTeam} width={40} height={40} preview={false} />
          </>
        )}
      </Link>
    </div>
  );
};

export default Logo;
