import { EyeFilled } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";

const ListCV = () => {
  return (
    <Col span={18} className="list-template-cv">
      <div className="list-template-cv__body">
        <div className="heading">
          <h1 class="suggest-title">
            Danh sách mẫu CV xin việc tiếng Anh / Việt / Nhật chuẩn 2022
          </h1>
          <p>
            Các mẫu CV đuợc thiết kế theo chuẩn, theo các ngành nghề. Phù hợp
            với sinh viên và người đi làm.
          </p>
        </div>
        <div className="container">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <div className="template-cv-item box-shadow">
                <div>
                  <div className="cv-img">
                    <div>
                      <img
                        src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/basic_5.png?v=1.0.3"
                        alt=""
                      />
                      <div class="new-template">
                        <i class="fa fa-certificate"></i> Mới
                      </div>
                    </div>

                    <div className="cv-overlay">
                      <div className="control">
                        <span class="preview-button">
                          <EyeFilled /> Xem trước
                        </span>
                        <span class="create-cv-button">
                          <i class="fa fa-pencil"></i> Dùng mẫu này
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="template-cv-item__info">
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <span class="template-cv-item-tag">Chuyên nghiệp</span>
                    <span class="template-cv-item-tag">Sáng tạo</span>
                  </div>
                  <div className="template-cv-title">
                    <span>Mẫu CV Basic 5</span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      className="template-cv-colors"
                      style={{ backgroundColor: "#FF823C" }}
                    ></div>
                    <div
                      className="template-cv-colors"
                      style={{ backgroundColor: "#40BA77" }}
                    ></div>
                    <div
                      className="template-cv-colors"
                      style={{ backgroundColor: "#5D5FEF" }}
                    ></div>
                    <div
                      className="template-cv-colors"
                      style={{ backgroundColor: "#00B4D8" }}
                    ></div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="template-cv-item box-shadow">
                <div>
                  <div className="cv-img">
                    <div>
                      <img
                        src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/basic_4.png?v=1.0.3"
                        alt=""
                      />
                      <div class="new-template">
                        <i class="fa fa-certificate"></i> Mới
                      </div>
                    </div>

                    <div className="cv-overlay">
                      <div className="control">
                        <span class="preview-button">
                          <EyeFilled /> Xem trước
                        </span>
                        <span class="create-cv-button">
                          <i class="fa fa-pencil"></i> Dùng mẫu này
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="template-cv-item__info">
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <span class="template-cv-item-tag">Chuyên nghiệp</span>
                    <span class="template-cv-item-tag">Sáng tạo</span>
                  </div>
                  <div className="template-cv-title">
                    <span>Mẫu CV Basic 4</span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      className="template-cv-colors"
                      style={{ backgroundColor: "#FF823C" }}
                    ></div>
                    <div
                      className="template-cv-colors"
                      style={{ backgroundColor: "#40BA77" }}
                    ></div>
                    <div
                      className="template-cv-colors"
                      style={{ backgroundColor: "#5D5FEF" }}
                    ></div>
                    <div
                      className="template-cv-colors"
                      style={{ backgroundColor: "#00B4D8" }}
                    ></div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="template-cv-item box-shadow">
                <div>
                  <div className="cv-img">
                    <div>
                      <img
                        src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/hello.png?v=1.0.3"
                        alt=""
                      />
                      <div class="new-template">
                        <i class="fa fa-certificate"></i> Mới
                      </div>
                    </div>

                    <div className="cv-overlay">
                      <div className="control">
                        <span className="preview-button">
                          <EyeFilled /> Xem trước
                        </span>
                        <span class="create-cv-button">
                          <i class="fa fa-pencil"></i> Dùng mẫu này
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="template-cv-item__info">
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <span className="template-cv-item-tag">Chuyên nghiệp</span>
                    <span className="template-cv-item-tag">Sáng tạo</span>
                  </div>
                  <div className="template-cv-title">
                    <span>Mẫu CV Basic 3</span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      className="template-cv-colors"
                      style={{ backgroundColor: "#FF823C" }}
                    ></div>
                    <div
                      className="template-cv-colors"
                      style={{ backgroundColor: "#40BA77" }}
                    ></div>
                    <div
                      className="template-cv-colors"
                      style={{ backgroundColor: "#5D5FEF" }}
                    ></div>
                    <div
                      className="template-cv-colors"
                      style={{ backgroundColor: "#00B4D8" }}
                    ></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default ListCV;
