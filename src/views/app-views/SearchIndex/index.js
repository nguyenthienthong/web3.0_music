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
  const [data, setData] = useState([]);

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
          <h2>Lịch sử tiềm kiếm</h2>
          Cart
        </div>

        <div className="category"></div>
      </div>
    </div>
  );
};

export default SearchIndex;
