import React from "react";

const Footer = () => {
  let data = [
    {
      id: 1,
      name: "Top CV",
    },
    {
      id: 2,
      name: "Đối tác",
    },
    {
      id: 3,
      name: "Hồ sơ và CV",
    },
    {
      id: 4,
      name: "Hồ sơ và CV",
    },
  ];

  return (
    <div className="footer">
      {data.map((e) => {
        return (
          <div key={e.id} className="footer__item" span={6}>
            <h2>{e.name}</h2>
            <ul>
              <li>Giới thiêụ</li>
              <li>Góc báo chí</li>
              <li>Tuyển dụng</li>
              <li>Liên hệ</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
