import "./_sidebar.scss";
import React from "react";
import {
  DeploymentUnitOutlined,
  HeartFilled,
  HomeOutlined,
  PlusSquareFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { APP_BASE } from "../../../config/appConfig";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div id="sidebar">
        <div id="logo">
          <Link to={`${APP_BASE}`}>
            <img
              src="https://80-20agency.com/wp-content/uploads/2021/07/spotify-logo-vector.png"
              alt="logo"
            />
          </Link>
        </div>
        <ul>
          <li>
            <Link to={`${APP_BASE}`}>
              <p>
                <HomeOutlined />
              </p>
              <p>Trang chủ</p>
            </Link>
          </li>
          <li>
            <Link to={`${APP_BASE}`}>
              <p>
                <SearchOutlined />
              </p>
              <p>Tìm kiếm</p>
            </Link>
          </li>
          <li>
            <a href="/">
              <p>
                <DeploymentUnitOutlined />
              </p>
              <p>Thư viện</p>
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="/">
              <p>
                <PlusSquareFilled />
              </p>
              <p>Tạo playlist</p>
            </a>
          </li>
          <li>
            <a href="/">
              <p>
                <HeartFilled />
              </p>
              <p>Bài hát yêu thích</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
