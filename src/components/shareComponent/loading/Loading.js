import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div className="shareLoading">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
