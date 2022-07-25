import { Button, Col, Image, Row, Table } from "antd";
import React from "react";
import "./cartshop.scss";
import { useSelector } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
const CartShop = () => {
  useSelector((state) => console.log(state));
  const columns = [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "img",
      dataIndex: "img",
      key: "img",
      render: (a) => {
        return (
          <>
            <Image width={200} src={a} />
          </>
        );
      },
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Control",
      dataIndex: "Control",
      key: "Control",
      render: () => {
        return (
          <>
            <Button style={{ marginRight: "10px" }} danger className="btn">
              <DeleteOutlined />
            </Button>
            <Button type="primary" className="btn">
              Thanh toán
            </Button>
          </>
        );
      },
    },
  ];
  const data = [
    {
      title: "Name",
      key: "1",
      name: "After You",
      img: "https://i.scdn.co/image/ab67616d00001e02959d54b4d96661b9dc1ed31f",
      price: "1,00",
    },
  ];
  return (
    <div className="cart">
      <h2 className="cart__title">Giỏ hàng</h2>
      <Table dataSource={data} columns={columns}></Table>
    </div>
  );
};

export default CartShop;
