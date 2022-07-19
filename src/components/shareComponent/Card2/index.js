import React from "react";
import "./_card2.scss";
import { Col, Row } from "antd";
import { HeartOutlined } from "@ant-design/icons";
const Card2 = () => {
  return (
    <Row>
      <Col className="card2">
        <div className="card2__title">
          <div className="card2__title__left">
            <img
              alt=""
              src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
            ></img>
          </div>
          <div className="card2__title__right">
            <span
              style={{
                fontSize: "0.9rem",
              }}
            >
              4
            </span>
            <span>
              <HeartOutlined />
            </span>
          </div>
        </div>
        <div className="card2__content">
          <img
            alt=""
            src="https://lh3.googleusercontent.com/oq7rUKNPQppaKvW3-0JrBLY75kYMgfm3cPLHYh2_Vs-mAVgV9NW3ipPNmrsYjOpYDOjpmqTf8k5pOxOTomD5nBMx1Dz0uv2W1Aho=w359"
          ></img>
        </div>
      </Col>
    </Row>
  );
};

export default Card2;
