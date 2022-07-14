import {
	CloseOutlined,
	MenuOutlined,
	SearchOutlined,
	UserOutlined,
	WalletOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Drawer } from "antd";
import "./_header.scss";
const Header = () => {
	// const dataFakeMusic = [
	// 	{ id: 1, name: "Màu nước mắc" },
	// 	{ id: 2, name: "Em của ngày hôm qua" },
	// 	{ id: 3, name: "Sao cũng được" },
	// 	{ id: 4, name: "Big city boy" },
	// 	{ id: 5, name: "Thiêu thân" },
	// 	{ id: 6, name: "Trốn tìm" },
	// 	{ id: 7, name: "Vài câu nói có khiến người thay đổi?" },
	// 	{ id: 8, name: "Ai Chung Tình Được Mãi" },
	// 	{ id: 9, name: "Diễm Xưa" },
	// 	{ id: 10, name: "Tệ Thật, Anh Nhớ Em" },
	// ];

	// const items = [
	// 	{
	// 		key: "post",
	// 		path: ``,
	// 		title: "Đăng bài viết",
	// 		icon: PlusOutlined,
	// 	},
	// 	{
	// 		key: "login",
	// 		path: `${AUTH_BASE}/login`,
	// 		title: "Đăng nhập",
	// 		icon: UserOutlined,
	// 	},
	// 	{
	// 		key: "register",
	// 		path: ``,
	// 		title: "Đăng ký",
	// 		icon: UserOutlined,
	// 	},
	// ];
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};
	return (
		<div className="header">
			<div className="input_search">
				<div className="search-icon">
					<SearchOutlined />
				</div>
				<input
					aria-invalid="false"
					aria-controls="NavSearch--results"
					aria-multiline="false"
					placeholder="Tìm kiếm bài hát, nghệ sĩ"
					role="searchbox"
					type="text"
				/>
				<div className="delete-text search-icon">
					<CloseOutlined />
				</div>
			</div>
			<div className="button_menu" onClick={showDrawer}>
				<MenuOutlined />
			</div>
			<Drawer
				className="drawer"
				title="Basic Drawer"
				placement="right"
				onClose={onClose}
				visible={visible}
				style={{ zIndex: "9999" }}
				size={"medium"}
				maskClosable={true}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
			<div className="button_header">
				<li>Khám phá</li>
				<li>Đăng bài hát</li>
				<li>Học hợp âm</li>
				<li>Hỗ trợ</li>
				<a href="/login" style={{ marginRight: "-10px" }}>
					<UserOutlined />
				</a>
				<a href="/">
					<WalletOutlined />
				</a>
			</div>
		</div>
	);
};

export default Header;
