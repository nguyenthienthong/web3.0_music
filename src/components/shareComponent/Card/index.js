import "./card.scss";
import { Col, Row } from "antd";
import React from "react";
import { CaretRightFilled } from "@ant-design/icons";
const Card = (props) => {
  const data = props;
  return (
    <Row className="card-home">
      {data.item.map((e) => {
        return (
          <Col key={e?.id} className="card">
            <div className="card__items">
              <div className="card__items__img">
                <img
                  style={{ borderRadius: `${data?.border}` }}
                  src={e?.urlImage}
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
                <h3>{e?.name}</h3>
                <p>{e?.content}</p>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Card;
