import { Image, Tooltip } from "antd";
import React from "react";
import "./detail_items.scss";
import { data } from "../../../FakeAPI/dataProducts";
import { useParams } from "react-router-dom";
const Detail_items = () => {
  const { a, id } = useParams();
  console.log(id);
  return (
    <div>
      <div className="contentSpacing">
        <div className="back_color"></div>
        <div className="linear_gr"></div>
        <div className="img_content">
          <Image src="https://i.scdn.co/image/ab67616d0000b273c01aa2db25e66a26a4c6488b" />
        </div>

        <div className="content_body">
          <span className="content_body__title">
            <p className="type_element">Vì mẹ anh bắt chia tay</p>
          </span>
          <div className="tradeStation--price">
            <div className="tradeStation--price-container">
              <Tooltip title="ATH">
                <img
                  className="pointer"
                  src="	https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt=""
                ></img>
              </Tooltip>
              <div className="price--amount">0,1</div>
            </div>

            <div className="price--fiat-amount-secondary">($106,79)</div>
          </div>

          <div className="content_body__category">
            <button className="btn buy_now">Buy Now</button>
            <button className="btn make_offer">Make offer</button>
          </div>

          <div className="content_body__introduce">
            <span className="content_body__introduce__items">Miu Lê</span>
            <span className="dots"></span>
            <span className="content_body__introduce__items">Karik</span>
            <span className="dots"></span>
            <span className="content_body__introduce__items">
              Châu Đăng Khoa
            </span>
            <span className="dots"></span>
            <span className="content_body__introduce__items">2022</span>
          </div>
        </div>
      </div>
      <div className="version-bar">
        <div className="version-bar-info">
          <h4>Chọn phiên bản</h4>
          <div className="use_post">Chau Lai</div>
        </div>
        <div className="statistical_rank">
          <div className="contribute-vote"></div>
        </div>
      </div>

      <div className="song-main-content">
        <div className=""></div>
        <div className="song_lyric">
          <div className="lyric-page-divider">
            Trang 1<span className="total-page"> / 2</span>
          </div>
          <div
            className="pre inline"
            style={{ height: "644px", fontSize: "12px", lineHeight: "39.6px" }}
          >
            <div className="song-lyric-note">
              <div className="chord_lyric_line text_only">Capo 3</div>
            </div>

            <div className="chord_lyric_line">
              <span className="hopamchuan_chord_inline">
                <Tooltip placement="topLeft" title="Hình ảnh">
                  <span className="hopamchuan_chord">[Em]</span>
                </Tooltip>
              </span>
              <span className="hopamchuan_lyric">Anh rất tốt thế </span>
              <span className="hopamchuan_chord_inline">
                <Tooltip placement="topLeft" title="hình ảnh">
                  <span className="hopamchuan_chord">[D]</span>
                </Tooltip>
              </span>
              <span className="hopamchuan_lyric">nhưng thà đừng gặp vui </span>
              <span className="hopamchuan_chord_inline">
                <Tooltip placement="topLeft" title="hình ảnh">
                  <span className="hopamchuan_chord">[C]</span>
                </Tooltip>
              </span>
              <span className="hopamchuan_lyric"> hơn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail_items;
