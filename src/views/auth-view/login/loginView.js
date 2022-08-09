import {
  Button,
  Checkbox,
  Form,
  Input,
  Col,
  Row,
  notification,
  Spin,
} from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginGg, login } from "../../../redux/actions/authAction";
import {
  signInWithFacebook,
  signInWithGoogle,
} from "../../../firebase/configFirebase";
import { Navigate } from "react-router";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
// LoginView.proTypes = {};
const LoginView = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loginGoogle = async () => {
    try {
      const rs = await signInWithGoogle();
      const info = rs.user.providerData[0];
      const data = {
        googleId: info.uid,
        email: info.email,
        fullName: info.displayName,
        avatar: info.photoURL,
      };
      const action = loginGg(data);
      dispatch(action);
      console.log(dispatch(action));
    } catch (error) {
      notification.error({
        message: "Login error",
        description: error.message,
      });
    }
  };
  const loginFacebook = async () => {
    try {
      const rs = await signInWithFacebook();
      // const info = rs.user.providerData[0];
      console.log(rs);

      // const data = {
      //   googleId: info.uid,
      //   email: info.email,
      //   fullName: info.displayName,
      //   avatar: info.photoURL,
      // };
      // const action = loginGg(data);
      // dispatch(action);
    } catch (error) {
      notification.error({
        message: "Login error",
        description: error.message,
      });
    }
  };
  const onFinish = async (values) => {
    try {
      const data = {
        account: values.username,
        password: values.password,
      };
      const action = login(data);
      dispatch(action);
      console.log(dispatch(action));
    } catch (error) {
      notification.error({
        message: "Login error",
        description: error.message,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
      <Link to={`/app`}>
        <div className="img_logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/252px-Spotify_logo_without_text.svg.png?20160123212544"
            alt=""
          ></img>
        </div>
      </Link>
      <h2>Login</h2>
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
          name="username"
          rules={[
            {
              required: true,
              message: "Hãy nhập tên đăng nhập!",
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
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
          <p className="forgot_password">
            <Link to={`/`}>Quên mật khẩu?</Link>
          </p>
        </Form.Item>

        <Form.Item>
          <Button className="btn--submit" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <div className="another_login">
          <Button onClick={loginFacebook} className="btn--facebook btn_signup">
            <FacebookOutlined />
            Facebook
          </Button>
          <Button onClick={loginGoogle} className="btn--google btn_signup">
            <GoogleOutlined />
            Google
          </Button>
        </div>
        <p className="question_signup">
          Don't have account <Link to={`/auth/register`}>Signup Now?</Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginView;
