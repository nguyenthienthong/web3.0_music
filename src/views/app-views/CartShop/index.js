import { Button, Col, Image, Row, Table, Popconfirm } from "antd";
import React from "react";
import "./cartshop.scss";
import { useSelector, useDispatch } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import { removeFromCart } from "../../../redux/actions/cartAction";
const CartShop = () => {
  useSelector((state) => console.log(state));
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartReducer);
  const columns = [
    {
      title: "name",
      dataIndex: "item.name",
      key: "name",
      render: (_, item) => item.item?.name,
    },
    {
      title: "img",
      dataIndex: "item.thumbnail",
      key: "item",
      render: (_, item) => <Image width={200} src={item.item?.thumbnail} />,
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
      render: (_, item) => {
        return (
          <>
            <Popconfirm
              title="Bạn có muốn xóa?"
              onConfirm={() => {
                dispatch(removeFromCart(item.id));
              }}
              okText="Có"
              cancelText="Không"
            >
              <Button
                style={{ marginRight: "10px" }}
                danger
                className="btn"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>

            <Button type="primary" className="btn">
              Thanh toán
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div className="cart">
      <h2 className="cart__title">Giỏ hàng</h2>
      <Table key={cart?._id} dataSource={cart} columns={columns}></Table>
    </div>
  );
};

export default CartShop;
