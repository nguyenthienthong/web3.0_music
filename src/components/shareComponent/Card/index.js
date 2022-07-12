import "./card.scss";
import { Col, Row } from "antd";
import React from "react";
import { CaretRightFilled } from "@ant-design/icons";
const Card = (props) => {
  return (
    <Row style={{ display: "flex", justifyContent: "space-between" }}>
      <Col span={4} className="card">
        <div className="card__items">
          <div className="card__items__img">
            <img
              src="https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d"
              alt=""
            />
            <div className="card__items__btn">
              <button className="card__items__btn__play">
                <span>
                  <CaretRightFilled />
                </span>
              </button>
            </div>
          </div>
          <div className="card__items__body">
            <h3>Hot hits Vietnam</h3>
            <p>
              Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh
              bìa: Miu Lê
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Card;
