import { Image, Tooltip } from "antd";
import React from "react";
import "./detail_items.scss";
const Detail_items = () => {
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
            <span class="dots"></span>
            <span className="content_body__introduce__items">Karik</span>
            <span class="dots"></span>
            <span className="content_body__introduce__items">
              Châu Đăng Khoa
            </span>
            <span class="dots"></span>
            <span className="content_body__introduce__items">2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail_items;
