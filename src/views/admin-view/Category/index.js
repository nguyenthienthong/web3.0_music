import {
  Button,
  Col,
  Row,
  message,
  Avatar,
  Table,
  Tag,
  Space,
  Modal,
  Descriptions,
  Select,
  Popconfirm,
  Image,
  Form,
  Input,
} from "antd";
import React, { useEffect, useState } from "react";
import userService from "../../../services/user.service";
import "./category.scss";
import { getSortName } from "../../../utils/utils";
import { Link } from "react-router-dom";
import genreService from "../../../services/genresService";
import { DeleteOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import { async } from "@firebase/util";
const { Option } = Select;
const switchColorbyRole = (role) => {
  switch (role) {
    case "ADMIN":
      return "magenta";
    case "USER":
      return "cyan";

    default:
      return "cyan";
  }
};

const Category = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState({
    data: false,
    updateRole: false,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({});
  const [modalCreate, setModalCreate] = useState(false);

  const [form] = Form.useForm();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setLoading({
      ...loading,
      data: true,
    });
    (async () => {
      try {
        let rs = await Promise.all([genreService.getAll()]);
        let dataNew = rs[0].data.data;
        setData(dataNew);
        setLoading({ ...loading, data: false });
      } catch (error) {
        message.error("error");
        console.log(error);
      }
    })();
  };

  const onFinish = async (value) => {
    if (
      !currentCategory ||
      !currentCategory?._id ||
      !currentCategory?.name ||
      !currentCategory?.imageUrl ||
      !currentCategory?.description
    )
      return message.error("Bạn không có thay đổi gì!");
    try {
      await genreService.update(currentCategory?._id, {
        name: value.name,
        description: value.description,
        imageUrl: value.AvatarCategory,
      });
      getData();
      setIsModalVisible(false);
      setCurrentCategory({});
    } catch (error) {
      message.error("Có lỗi xảy ra, vui lòng thử lại sau!");
    }
  };

  const openModel = (category) => {
    setIsModalVisible(true);
    setCurrentCategory(category);
  };

  const deleteGenre = async (e) => {
    try {
      await genreService.delete(e._id);
      getData();
    } catch (error) {
      console.log("error", error);
    }
  };

  const CreateCategory = async (currentCategory) => {
    if (
      !currentCategory ||
      !currentCategory?.AvatarCategory ||
      !currentCategory?.description ||
      !currentCategory?.name
    )
      return message.error("Bạn không có dữ liệu, vui lòng nhập vào!");
    try {
      await genreService.create({
        name: currentCategory.name,
        description: currentCategory.description,
        imageUrl: currentCategory.AvatarCategory,
      });
      getData();
      setModalCreate(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  const columns = [
    {
      title: "AvatarCategory",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (avatar, record) => (
        <>
          <Image width={200} src={record?.imageUrl}></Image>
        </>
      ),
    },
    {
      title: "Name ",
      dataIndex: "name",
      key: "name",
      sorter: true,
      sorter: (a, b) => (a?.name > b?.name ? 1 : -1),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: true,
      sorter: (a, b) => (a.description > b.description ? 1 : -1),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => openModel(record)}>
            Thay đổi
          </Button>
          <Button danger type="primary">
            <Popconfirm
              title="Bạn có chắc muốn xóa?"
              onConfirm={() => deleteGenre(record)}
              okText="Có"
              cancelText="Không"
            >
              <DeleteOutlined />
            </Popconfirm>
          </Button>
        </Space>
      ),
    },
  ];

  console.log(currentCategory?.name);
  return (
    <Row className="list-point">
      <Col className="list-point__content">
        <div className="list-point__content__heading">
          <div className="content__heading-title">
            <h1>Danh sách thể loại</h1>
          </div>
          <div className="content__heading-btn-control">
            <Button
              onClick={() => setModalCreate(true)}
              className="btn-add"
              type="success"
            >
              Thêm mới
            </Button>
          </div>
        </div>
      </Col>
      <Col span={24}>
        <Table
          dataSource={data}
          rowKey="_id"
          columns={columns}
          loading={loading.data}
        />
      </Col>
      <Modal
        title="Thay đổi"
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        visible={isModalVisible}
      >
        <Form
          form={form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          fields={[
            { name: ["AvatarCategory"], value: currentCategory?.imageUrl },
            { name: ["name"], value: currentCategory?.name },
            { name: ["description"], value: currentCategory?.description },
          ]}
          autoComplete="off"
        >
          <Form.Item label="AvatarCategory" name="AvatarCategory">
            <Input />
          </Form.Item>
          <Form.Item label="name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>
          <div className="text-center mt-2">
            <Button htmlType="submit" type="primary">
              Lưu
            </Button>
          </div>
        </Form>
      </Modal>

      <Modal
        title="Thêm thể loại"
        footer={null}
        onCancel={() => setModalCreate(false)}
        visible={modalCreate}
      >
        <Form
          form={form}
          initialValues={{
            remember: true,
          }}
          onFinish={CreateCategory}
          autoComplete="off"
        >
          <Form.Item label="AvatarCategory" name="AvatarCategory">
            <Input />
          </Form.Item>
          <Form.Item label="name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>
          <div className="text-center mt-2">
            <Button htmlType="submit" type="primary">
              Lưu
            </Button>
          </div>
        </Form>
      </Modal>
    </Row>
  );
};

export default Category;
