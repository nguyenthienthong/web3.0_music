import React, { useEffect, useState } from "react";
import "./search.scss";
import { Col, Row } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { APP_BASE } from "../../../config/appConfig";
import { addToCart } from "../../../redux/actions/cartAction";
import { CaretRightFilled, ShoppingCartOutlined } from "@ant-design/icons";
import songService from "../../../services/song.service";
const Search = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  let { param } = useParams();

  useEffect(() => {
    getData(param);
  }, [param]);
  const getData = async (e) => {
    try {
      const rs = await Promise.all([songService.search(e)]);
      let dataNew = rs[0].data.hits;
      setData(dataNew);
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

  const ListItems = (props) => {
    const { name, singer, musician, thumbnail } = props.item._source;
    return (
      <Col key={props.item._id} className="card">
        <div className="card__items">
          <Link to={`${APP_BASE}/detail/${props.item._id}`}>
            <div className="card__items__img">
              <img src={thumbnail} alt="" />
            </div>
            <div className="card__items__body">
              <h3>{name}</h3>
              <p>
                {musician} - {singer}
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
                dispatch(addToCart(props.item._source));
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
        {data[0] ? (
          <>
            <div className="search_history">
              <h2>Lịch sử tiềm kiếm</h2>
            </div>
            <Row>
              {data.map((e) => (
                <ListItems item={e} />
              ))}
            </Row>
          </>
        ) : (
          <>
            <div>Không tìm thấy kết quả cho "{param}"</div>
            <div>
              Vui lòng đảm bảo viết đúng chính tả, hoặc sử dụng ít từ khoá hơn
              hay thử các từ khoá khác
            </div>
          </>
        )}

        <div className="category"></div>
      </div>
    </div>
  );
};

export default Search;
