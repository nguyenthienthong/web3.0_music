import { Col, Row } from "antd";
import React from "react";
import Card from "../../../components/shareComponent/Card";
import "./home.scss";
import { data, topUser } from "../../../FakeAPI/dataProducts";
function Home() {
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <div className="spacer"></div>
      <div className="home__container">
        <div className="top__user">
          <h2>Top những bài hát hay nhất</h2>
          <Card item={topUser} />
        </div>
        <Row className="home__container__body">
          <Col className="body__col" span={20}>
            <h2 className="body__col__title">
              Lựa chọn của lùa gà (ngẫu nhiên)
            </h2>
          </Col>
          <Col className="body__col" span={4}>
            <span className="view-all">Xem tất cả</span>
          </Col>
          <Card item={data} />
        </Row>

        <div className="top__user">
          <h2>Bảng xếp hạng người đăng nhiều views nhất tuần</h2>

          <Card item={topUser} border={"50%"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
