import { Checkbox, Col, Select } from "antd";
import React from "react";
const { Option } = Select;

const NavSearch = () => {
  let language = [
    {
      id: 1,
      name: "Tiếng việt",
    },
    {
      id: 2,
      name: "Tiếng Anh",
    },
    {
      id: 3,
      name: "Tiếng Nhật",
    },
  ];

  let occupation = [
    {
      id: 1,
      name: "Tất cả ngành nghề",
    },
    {
      id: 2,
      name: "Kinh doanh / Bán hàng",
    },
    {
      id: 3,
      name: "Biên / Phiên dịch",
    },
    {
      id: 4,
      name: "Báo chí / Truyền hình",
    },
    {
      id: 5,
      name: "Bưu chính / Viễn thông",
    },
    {
      id: 6,
      name: "Bảo hiểm",
    },
    {
      id: 7,
      name: "Chứng khoán",
    },
    {
      id: 8,
      name: "Công nghệ cao",
    },
    {
      id: 9,
      name: "Công nghệ thông tin",
    },
    {
      id: 10,
      name: "Thiết kế đồ họa",
    },
    {
      id: 11,
      name: "Thời trang",
    },
  ];

  let design = [
    {
      id: 1,
      name: "Tất cả thiết kế",
    },
    {
      id: 2,
      name: "Đơn giản",
    },
    {
      id: 3,
      name: "Thanh lịch",
    },
    {
      id: 4,
      name: "Kinh nghiệm",
    },
    {
      id: 5,
      name: "Màu sắc",
    },
    {
      id: 6,
      name: "Sáng tạo",
    },
    {
      id: 7,
      name: "Chuyên nghiệp",
    },
    {
      id: 8,
      name: "Trang trọng",
    },
    {
      id: 9,
      name: "Truyền thống",
    },
    {
      id: 10,
      name: "Thương hiệu",
    },
    {
      id: 11,
      name: "Công nghệ",
    },
  ];
  return (
    <Col className="side-bar" span={6}>
      <div className="fixed">
        <div className="cv-filter-box">
          <div className="box-filter">
            <h2 className="title-filter">Tìm mẫu SV phù hợp</h2>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              style={{ width: "100%", marginBottom: "10px", textAlign: "left" }}
              size={"large"}
            >
              {language.map((e) => {
                return (
                  <Option
                    checked={(e.id = 1 ? "check" : "")}
                    value={e.id}
                    key={e.id}
                  >
                    {e.name}
                  </Option>
                );
              })}
            </Select>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              style={{ width: "100%", marginBottom: "10px", textAlign: "left" }}
              size={"large"}
            >
              {occupation.map((e) => {
                return (
                  <Option value={e.id} key={e.id}>
                    {e.name}
                  </Option>
                );
              })}
            </Select>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              style={{ width: "100%", marginBottom: "10px", textAlign: "left" }}
              size={"large"}
            >
              {design.map((e) => {
                return (
                  <Option value={e.id} key={e.id}>
                    {e.name}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className="order-box">
            <h2 className="title-filter">Sắp xếp</h2>
            <Checkbox checked={true}>Mới cập nhật</Checkbox>
            <Checkbox>Được dùng nhiều nhất</Checkbox>
          </div>
        </div>
        <img
          className="cv-image"
          src="https://www.topcv.vn/images/cv/banner_left_list_cv.png"
          alt=""
        />
      </div>
    </Col>
  );
};

export default NavSearch;
