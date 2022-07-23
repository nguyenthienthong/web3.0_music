import { Col, Row, Table } from "antd";
import React from "react";
import "./cartshop.scss";
import { useSelector } from "react-redux";
const CartShop = () => {
  const { cartAr } = useSelector((state) => state.cartReducer);
  console.log(cartAr);
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
      reder: () => {
        <></>;
      },
    },
  ];
  const data = [
    {
      title: "Name",
      key: "1",
      name: "John Brown",
      img: "https://i.scdn.co/image/ab67616d00001e02959d54b4d96661b9dc1ed31f",
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
