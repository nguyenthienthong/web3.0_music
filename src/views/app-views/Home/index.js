import { Col, Row } from "antd";
import React from "react";
import Card from "../../../components/shareComponent/Card";
import "./home.scss";

function Home() {
  let data = [
    {
      id: 17440,
      urlImage:
        "https://i.scdn.co/image/ab67706f00000002b6315b5c317683ccebb43d36",
      price: 0.04,
      name: "Mãi Mãi Phạm Duy",
      content: "Tôi yêu tiếng nước tôi, từ khi mới ra đời...",
      views: 9,
    },
    {
      id: 17441,
      urlImage:
        "https://i.ytimg.com/vi/cfbNtHNCMBo/maxresdefault.jpg?v=62b3160d",
      price: 0.04,
      name: "B RAY x SOFIA & CHÂU ĐĂNG KHOA | THIÊU THÂN",
      content: "Cùng B-ray với sản phẩm mới nhất với thiêu thân...",
      views: 9,
    },
    {
      id: 17442,
      urlImage:
        "https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
      price: 0.04,
      name: "",
      content:
        "Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
      views: 9,
    },
  ];
  return (
    <div className="home__container">
      <Row className="home__container__body">
        <Col className="body__col" span={20}>
          <h2 className="body__col__title">lựa chọn của lùa gà</h2>
        </Col>
        <Col className="body__col" span={4}>
          <span className="view-all">Xem tất cả</span>
        </Col>
        <Col span={24}>
          <Card item={data} />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
