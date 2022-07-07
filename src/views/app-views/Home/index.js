import { Row } from "antd";
import React from "react";
import ListCV from "./ListCV";
import NavSearch from "./NavSearch";
const Home = () => {
  return (
    <>
      <Row className="profile">
        <NavSearch />
        <ListCV />
      </Row>
      <div className="template-guide">
        <div className="container">
          <div className="box-text">
            <h2>
              Tạo CV online miễn phí với các mẫu CV được thiết kế sẵn chỉ với 3
              bước:
            </h2>
            <ul>
              <li>
                Bước 1: Chọn ngôn ngữ khác / thay đổi tiêu chí gợi ý mẫu CV để
                TopCV gợi ý các mẫu CV phù hợp với nhu cầu của bạn.
              </li>
              <li>
                Bước 2: Chọn mẫu CV miễn phí mà bạn ưng ý nhất và tiến hành viết
                CV.
              </li>
              <li>
                Bước 3: Sau khi hoàn thiện viết CV, bạn tiến hành lưu CV lại tải
                CV về dưới dạng PDF hoặc sử dụng link CV online để gửi cho nhà
                tuyển dụng.
              </li>
            </ul>
          </div>
          <div className="box-text">
            <h2>Tại sao nên tạo CV online trên TopCV</h2>
            <ul>
              <li>
                Nhiều mẫu CV đẹp, miễn phí, phù hợp nhu cầu ứng tuyển các vị trí
                khác nhau.
              </li>
              <li>
                Tương tác trực quan, dễ dàng chỉnh sửa thông tin, tạo CV online
                nhanh chóng trong vòng 5 phút.
              </li>
              <li>
                Nhận gợi ý cách viết CV phù hợp cùng các mẫu CV tham khảo chi
                tiết theo ngành nghề.
              </li>
              <li>Mẫu CV đồng bộ với các mẫu thư xin việc (Cover Letter).</li>
              <li>Các mẫu CV hỗ trợ đa ngôn ngữ: tiếng Anh / Nhật / Việt.</li>
            </ul>
          </div>
          <nav className="table-of-content">
            <p style={{ marginBottom: "15px", fontSize: "20px" }}>Mục lục:</p>
            <ul className="none-list-style">
              <li>
                <h2 className="mp-0">
                  <span className="table-content h4 big-item">
                    1. CV là gì? Những điều bạn cần lưu ý khi viết CV xin việc
                  </span>
                </h2>
              </li>
              <li>
                <h3 className="mpc-0">
                  <span className="table-content h4 small-item">
                    1.1. CV là gì?
                  </span>
                </h3>
              </li>
              <li>
                <h3 className="mpc-0">
                  <span className="table-content h4 small-item">
                    1.2. CV và sơ yếu lý lịch khác nhau chỗ nào?
                  </span>
                </h3>
              </li>
              <li>
                <h3 className="mpc-0">
                  <span className="table-content h4 small-item">
                    1.3. CV có những dạng nào?
                  </span>
                </h3>
              </li>
              <li>
                <h3 className="mpc-0">
                  <span className="table-content h4 small-item">
                    1.4. CV gồm những gì?
                  </span>
                </h3>
              </li>
              <li>
                <h2 className="mp-0">
                  <span className="table-content h4 big-item">
                    2. Cách viết CV xin việc chuẩn
                  </span>
                </h2>
              </li>
              <li>
                <h3 className="mpc-0">
                  <span className="table-content h4 small-item">
                    2.1. Cách viết CV xin việc tiếng Anh chuẩn
                  </span>
                </h3>
              </li>
              <li>
                <h3 className="mpc-0">
                  <span className="table-content h4 small-item">
                    2.2. Cách viết CV xin việc tiếng Nhật chuẩn
                  </span>
                </h3>
              </li>
              <li>
                <h3 className="mpc-0">
                  <span className="table-content h4 small-item">
                    2.3. Cách viết CV xin việc tiếng Trung chuẩn
                  </span>
                </h3>
              </li>
              <li>
                <span className="table-content h4 small-item">
                  2.4. Cách viết CV ấn tượng cho sinh viên mới ra trường
                </span>
              </li>
              <li>
                <span className="table-content h4 small-item">
                  2.5. Cách viết CV xin thực tập cho sinh viên
                </span>
              </li>
              <li>
                <span className="table-content h4 small-item">
                  2.6. Cách viết CV xin học bổng du học chuẩn
                </span>
              </li>
              <li>
                <span className="table-content h4 small-item">
                  2.7. Cách viết CV cho sinh viên chưa tốt nghiệp
                </span>
              </li>
              <li>
                <h2 className="mp-0">
                  <span className="table-content h4 big-item">
                    3. CV theo ngành nghề phổ biến
                  </span>
                </h2>
              </li>
              <li>
                <span className="table-content h4 small-item">
                  3.1. Mẫu CV xin việc kế toán
                </span>
              </li>
              <li>
                <span className="table-content h4 small-item">
                  3.2. Mẫu CV xin việc IT
                </span>
              </li>
              <li>
                <span className="table-content h4 small-item">
                  3.3. Mẫu CV xin việc nhân viên kinh doanh
                </span>
              </li>
              <li>
                <span className="table-content h4 small-item">
                  3.4. Mẫu CV xin việc chăm sóc khách hàng
                </span>
              </li>
              <li>
                <span className="table-content h4 small-item">
                  3.5. Mẫu CV xin việc marketing
                </span>
              </li>
              <li>
                <span className="table-content h4 small-item">
                  3.6. Mẫu CV xin việc hành chính nhân sự
                </span>
              </li>
              <li>
                <h2 className="mp-0">
                  <span className="table-content h4 big-item">
                    4. Cách tạo mẫu CV xin việc đơn giản
                  </span>
                </h2>
              </li>
              <li>
                <h2 className="mp-0">
                  <span className="table-content h4 big-item">
                    5. Một số lưu ý khi viết CV bạn nên nắm rõ
                  </span>
                </h2>
              </li>
              <li>
                <h2 className="mp-0">
                  <span className="table-content h4 big-item">
                    6. Cách gửi CV qua mail
                  </span>
                </h2>
              </li>
            </ul>
          </nav>
          <div>
            <p className="c2 c29">
              <span className="c11 c43"></span>
            </p>
          </div>
          <p className="c7">
            <span className="c26 c9">
              Chúng ta đều biết rằng CV là một phần không thể thiếu trong quá
              trình xin việc của ứng viên. Vậy chính xác CV là gì? CV gồm những
              phần nào? Đâu là cách viết CV xin việc chuẩn nhất? Trong bài viết
              dưới đây TopCV sẽ đem tới những thông tin hữu ích về CV xin việc
              cũng như những lưu ý cần nắm rõ khi viết CV xin việc.
            </span>
          </p>

          <div className="div-btn-more-info">
            <button className="btn btn-info btn-more-info" id="btn-more-info">
              Xem thêm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
