import "./card.scss";
import { Col, Row } from "antd";
import React from "react";
import { CaretRightFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { APP_BASE } from "../../../config/appConfig";
import { addToCart } from "../../../redux/actions/cartAction";
const CardProducts = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
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

export default CardProducts;
