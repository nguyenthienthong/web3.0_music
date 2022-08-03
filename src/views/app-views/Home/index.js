import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Card from "../../../components/shareComponent/Card";
import "./home.scss";
import { topUser } from "../../../FakeAPI/dataProducts";
import songService from "../../../services/song.service";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../../redux/actions/productAction";
import CardProducts from "../../../components/shareComponent/CardProducts";
function Home() {
  const { product } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const rs = await Promise.all([songService.getAll()]);
      let dataNew = rs[0].data;
      dispatch(setProduct(dataNew));
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

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
          <Row className="card-home">
            {product.map((e) => {
              return <CardProducts key={e._id} data={e} />;
            })}
          </Row>
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
