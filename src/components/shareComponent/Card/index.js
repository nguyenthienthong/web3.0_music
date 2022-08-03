import "./card.scss";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { CaretRightFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { APP_BASE } from "../../../config/appConfig";
const Card = (props) => {
  const data = props;
  return (
    <Row className="card-home">
      {data.item.map((e) => {
        return (
          <Col key={e?.id} className="card">
            <div className="card__items">
              <Link to={`${APP_BASE}/detail/${e.id}`}>
                <div className="card__items__img">
                  <img
                    style={{ borderRadius: `${data?.border}` }}
                    src={e?.thumbnail}
                    alt=""
                  />
                </div>
                <div className="card__items__body">
                  <h3>{e?.name}</h3>
                  <p>
                    {e?.musician} - {e?.singer}
                  </p>
                </div>
              </Link>
              <div className="card__items__btn">
                <button className="card__items__btn__shop">
                  <span>
                    <CaretRightFilled />
                  </span>
                </button>
                <button className="card__items__btn__play">
                  <span>
                    <ShoppingCartOutlined />
                  </span>
                </button>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Card;
