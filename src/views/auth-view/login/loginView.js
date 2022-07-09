import { Button, Checkbox, Form, Input, Col, Row, notification } from "antd";
import React from "react";

import "../../../assets/scss/components/login/index.scss";
import { signInWithGoogle } from "../../../firebase/configFirebase";

const loginView = () => {
  const loginGoogle = async () => {
    try {
      const rs = await signInWithGoogle();
      console.log(rs);
      const info = rs.user.providerData[0];
      const data = {
        googleId: info.uid,
        email: info.email,
        fullname: info.displayName,
        avatar: info.photoURL,
      };
      console.log(data);
    } catch (error) {
      notification.error({
        message: "Login error",
        description: error.message,
      });
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-container">
      <div className="login-content">
        <Row>
          <Col span={16}>
            <h2>Đăng nhập qua tài khoản</h2>
            <Form
              className="form"
              name="basic"
              labelCol={{
                span: 9,
              }}
              wrapperCol={{
                span: 8,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Tên đăng nhập"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập tên đăng nhập!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập mật khẩu!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="unchecked"
                wrapperCol={{
                  offset: 9,
                  span: 16,
                }}
              >
                <Checkbox>Lưu mật khẩu</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 9,
                  span: 16,
                }}
              >
                <Button className="btn-login" htmlType="submit">
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={8} className={"right-content"}>
            <h2>Qua ứng dụng thứ 3</h2>
            <Button className="btn-third-login" htmlType="submit">
              <img
                style={{ width: "20px" }}
                src={require("../../../assets/images/fb_NoBackground.png")}
                alt=""
              ></img>
              Facebook
            </Button>
            <Button
              className="btn-third-login"
              onClick={loginGoogle}
              htmlType="submit"
            >
              <img
                style={{ width: "20px" }}
                src={require("../../../assets/images/gg_NoBackground.png")}
                alt=""
              ></img>
              Google
            </Button>
            <Button className="btn-third-login" htmlType="submit">
              <img
                style={{ width: "20px" }}
                src={require("../../../assets/images/tt_NoBackground.png")}
                alt=""
              ></img>
              Twister
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default loginView;
