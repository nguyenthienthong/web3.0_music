import {
  HomeOutlined,
  // SecurityScanOutlined,
  // BarChartOutlined,
  // UnlockOutlined,
  // FileAddOutlined,
  // UnorderedListOutlined,
  // UserOutlined,
} from "@ant-design/icons";
import { ADMIN_BASE } from "./appConfig";
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    key: "1",
    path: `${ADMIN_BASE}`,
    title: "Trang chủ",
    icon: HomeOutlined,
  },
  {
    key: "2",
    path: `${ADMIN_BASE}/user`,
    title: "Người dùng",
    icon: HomeOutlined,
  },
];

// {
//   key: "2",
//   path: `${ADMIN_BASE}`,
//   title: "Quản trị",
//   icon: SecurityScanOutlined,
//   subMenu: [
//     {
//       key: "2-1",
//       path: `${ADMIN_BASE}/term`,
//       title: "Học kỳ",
//     },
//     {
//       key: "2-2",
//       path: `${ADMIN_BASE}/subjects`,
//       title: "Môn học",
//     },
//     {
//       key: "2-3",
//       path: `${ADMIN_BASE}/students`,
//       title: "Sinh viên",
//     },
//     {
//       key: "2-4",
//       path: `${ADMIN_BASE}/classes`,
//       title: "Lớp học",
//     },
//     {
//       key: "2-5",
//       path: `${ADMIN_BASE}/typeScore`,
//       title: "Kiểu điểm",
//     },
//   ],
// },
// {
//   key: "3",
//   path: `${ADMIN_BASE}/statistical`,
//   title: "Tiến độ",
//   icon: BarChartOutlined,
// },
// {
//   key: "4",
//   path: `${ADMIN_BASE}/pointLock`,
//   title: "Deadline",
//   icon: UnlockOutlined,
// },
// {
//   key: "5",
//   path: `${ADMIN_BASE}`,
//   title: "Tài khoản",
//   icon: UserOutlined,
//   subMenu: [
//     {
//       key: "5-1",
//       path: `${ADMIN_BASE}/user`,
//       title: "Danh sách",
//     },
//     {
//       key: "5-2",
//       path: `${ADMIN_BASE}/add-user`,
//       title: "Thêm mới",
//     },
//   ],
// },
// {
//   key: "6",
//   path: `${ADMIN_BASE}/addData`,
//   title: "Thêm dữ liệu",
//   icon: FileAddOutlined,
// },
