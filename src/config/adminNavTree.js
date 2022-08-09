import { HomeOutlined, TeamOutlined } from "@ant-design/icons";
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
    icon: TeamOutlined,
  },
  {
    key: "3",
    path: `${ADMIN_BASE}/category`,
    title: "Thể loại",
    icon: HomeOutlined,
  },
];
