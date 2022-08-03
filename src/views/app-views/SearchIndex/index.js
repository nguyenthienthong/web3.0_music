import React, { useEffect, useState } from "react";
import "./searchIndex.scss";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { APP_BASE } from "../../../config/appConfig";
import { addToCart } from "../../../redux/actions/cartAction";
import { CaretRightFilled, ShoppingCartOutlined } from "@ant-design/icons";
import songService from "../../../services/song.service";
const SearchIndex = () => {
  const dispatch = useDispatch();
  const data = [
    {
      key: 1,
      name: "Podcast",
      img: "https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5",
      color: "rgb(39, 133, 106)",
    },
    {
      key: 2,
      name: "Dành cho bạn",
      img: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
      color: "rgb(30, 50, 100)",
    },
    {
      key: 3,
      name: "Bảng xếp hạng",
      img: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
      color: "rgb(141, 103, 171)",
    },
    {
      key: 4,
      name: "Mới phát hành",
      img: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
      color: "rgb(232, 17, 91)",
    },
  ];
  const cartHistory = (data) => {
    return (
      <Col key={data._id} className="card">
        <div className="card__items">
          <Link to={`${APP_BASE}/detail/${data._id}`}>
            <div className="card__items__img">
              <img
                style={{ borderRadius: `${data?.border}` }}
                src={data?.thumbnail}
                alt=""
              />
            </div>
            <div className="card__items__body">
              <h3>{data?.name}</h3>
              <p>
                {data?.musician} - {data?.singer}
              </p>
            </div>
          </Link>
          <div className="card__items__btn">
            <button className="card__items__btn__shop">
              <span>
                <CaretRightFilled />
              </span>
            </button>
            <button
              onClick={() => {
                dispatch(addToCart(data));
              }}
              className="card__items__btn__play"
            >
              <span>
                <ShoppingCartOutlined />
              </span>
            </button>
          </div>
        </div>
      </Col>
    );
  };
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <div className="spacer"></div>
      <div className="search_page">
        <div className="search_history">
          <h2>Duyệt tìm tất cả</h2>
          <Row gutter={[26, 16]}>
            {data.map((e) => {
              return (
                <Col key={e.key} xs={12} sm={8} md={8} lg={8} xl={4} xxl={4}>
                  <div
                    style={{ backgroundColor: `${e.color}` }}
                    className="items_category"
                  >
                    <img className="items_category__img" alt="" src={e.img} />
                    <h3>{e.name}</h3>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>

        <div className="category"></div>
      </div>
    </div>
  );
};

export default SearchIndex;
