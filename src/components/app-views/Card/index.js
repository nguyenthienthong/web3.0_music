import './_card.scss';
import { Col, Row } from "antd";
import React from "react";

const Card = () => {
    return ( 
        <Row>
            <Col className="card">
                <div className="card__image">
                <img src="https://lh3.googleusercontent.com/oq7rUKNPQppaKvW3-0JrBLY75kYMgfm3cPLHYh2_Vs-mAVgV9NW3ipPNmrsYjOpYDOjpmqTf8k5pOxOTomD5nBMx1Dz0uv2W1Aho=w359" alt="nft"/>
                </div>
                <div className="card__body">
                <div className="card-key">
                    <p>#17440</p>
                </div>
                <div className="card__body__title">crazy bared ape club</div>
                <div className="card__body__price">
                    <p>price</p>
                    <div className="card-price-content">
                    <img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" alt="eth"/>
                    <span>0.04</span>
                    </div>
                </div>

                <div className="card-time">a-day-left</div>
                </div>
                <div className="card__buy">
                <h1>BUY NOW</h1>
                </div>
            </Col>
        </Row>
     );
}
 
export default Card;