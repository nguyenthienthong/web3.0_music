import { RollbackOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { APP_BASE, AUTH_BASE } from "../../../config/appConfig";
import authService from "../../../services/authService";

const RegisterView = () => {
  const [erorrPass, setErorrPass] = useState(false);
  const [form] = Form.useForm();
  const onFinish = async (value) => {
    if (value.conformPassword !== value.password) {
      return setErorrPass(true);
    }
    const data = {
      username: value.username,
      fullName: value.fullname,
      email: value.email,
      password: value.password,
    };
    await authService.register(data);
    message.success({
      content: "Success!",
      key: "success",
    });
    <Navigate to={`${AUTH_BASE}/login`} />;
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login register">
      <div className="back">
        <Link style={{ color: "#fff" }} to={`${AUTH_BASE}/login`}>
          <RollbackOutlined />
        </Link>
      </div>
      <Link to={`${APP_BASE}`}>
        <div className="img_logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/252px-Spotify_logo_without_text.svg.png?20160123212544"
            alt=""
          ></img>
        </div>
      </Link>
      <h2>Register</h2>
      <Form
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form_login"
      >
        <Form.Item
          name="fullname"
          rules={[
            {
              required: true,
              message: "Hãy nhập họ và tên!",
            },
          ]}
        >
          <Input placeholder="Fullname" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Hãy nhập email!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Hãy nhập tên tài khoản",
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Hãy nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="conformPassword"
          rules={[
            {
              required: true,
              message: "Hãy nhập lại mật khẩu!",
            },
          ]}
        >
          <Input.Password placeholder="Conform Password" />
        </Form.Item>
        <p style={{ color: "#ff4d4f" }} className={erorrPass ? "" : "none"}>
          Mật khẩu không giống nhau
        </p>
        <Form.Item>
          <Button className="btn--submit" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterView;
