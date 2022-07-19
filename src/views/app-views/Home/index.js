import { Col, Row } from "antd";
import React from "react";
import Card from "../../../components/shareComponent/Card";
import "./home.scss";

function Home() {
	let data = [
		{
			id: 17440,
			urlImage:
				"https://i.scdn.co/image/ab67706f00000002b6315b5c317683ccebb43d36",
			price: 0.04,
			name: "Mãi Mãi Phạm Duy",
			content: "Tôi yêu tiếng nước tôi, từ khi mới ra đời...",
			views: 9,
		},
		{
			id: 17441,
			urlImage:
				"https://i.scdn.co/image/ab67616d00001e029085710299027029d3602e57",
			price: 0.04,
			name: "B RAY x SOFIA & CHÂU ĐĂNG KHOA | THIÊU THÂN",
			content: "Cùng B-ray với sản phẩm mới nhất với thiêu thân...",
			views: 9,
		},
		{
			id: 17442,
			urlImage:
				"https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
			price: 0.04,
			name: "Hot  hit Vietnam",
			content:
				"Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
			views: 9,
		},
		{
			id: 174423,
			urlImage:
				"https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
			price: 0.04,
			name: "Hot  hit Vietnam",
			content:
				"Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
			views: 9,
		},
		{
			id: 174421,
			urlImage:
				"https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
			price: 0.04,
			name: "Hot  hit Vietnam",
			content:
				"Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
			views: 9,
		},
		{
			id: 17445,
			urlImage:
				"https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
			price: 0.04,
			name: "Hot  hit Vietnam",
			content:
				"Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
			views: 9,
		},
		{
			id: 17448,
			urlImage:
				"https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
			price: 0.04,
			name: "Hot  hit Vietnam",
			content:
				"Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
			views: 9,
		},
		{
			id: 1744211,
			urlImage:
				"https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
			price: 0.04,
			name: "Hot  hit Vietnam",
			content:
				"Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
			views: 9,
		},
	];

	let topUser = [
		{
			id: 17440,
			urlImage:
				"	https://i.scdn.co/image/ab6761610000f178ec05963eab63676a539fef13",
			price: 0.04,
			name: "Camila Cabello",
			content: "Nghệ sĩ",
			views: 9,
		},
		{
			id: 17441,
			urlImage:
				"https://i.scdn.co/image/ab67616d00001e029085710299027029d3602e57",
			price: 0.04,
			name: "B RAY x SOFIA & CHÂU ĐĂNG KHOA | THIÊU THÂN",
			content: "Cùng B-ray với sản phẩm mới nhất với thiêu thân...",
			views: 9,
		},
		{
			id: 17442,
			urlImage:
				"https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
			price: 0.04,
			name: "Hot  hit Vietnam",
			content:
				"Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
			views: 9,
		},
		{
			id: 174423,
			urlImage:
				"https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
			price: 0.04,
			name: "Hot  hit Vietnam",
			content:
				"Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
			views: 9,
		},
		{
			id: 174421,
			urlImage:
				"https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
			price: 0.04,
			name: "Hot  hit Vietnam",
			content:
				"Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
			views: 9,
		},
		{
			id: 17445,
			urlImage:
				"https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
			price: 0.04,
			name: "Hot  hit Vietnam",
			content:
				"Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
			views: 9,
		},
		{
			id: 17448,
			urlImage:
				"https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
			price: 0.04,
			name: "Hot  hit Vietnam",
			content:
				"Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
			views: 9,
		},
		{
			id: 1744211,
			urlImage:
				"https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
			price: 0.04,
			name: "Hot  hit Vietnam",
			content:
				"Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
			views: 9,
		},
	];
	return (
		<div style={{ backgroundColor: "#121212" }}>
			<div className="spacer"></div>
			<div className="home__container">
				<div className="top__user">
					<h2>Top những bài hát hay nhất</h2>
					<Card item={topUser} />
				</div>
				<Row className="home__container__body">
					<Col className="body__col" span={20}>
						<h2 className="body__col__title">
							Lựa chọn của lùa gà (ngẫu nhiên)
						</h2>
					</Col>
					<Col className="body__col" span={4}>
						<span className="view-all">Xem tất cả</span>
					</Col>
					<Card item={data} />
				</Row>

				<div className="top__user">
					<h2>Bảng xếp hạng người đăng nhiều views nhất tuần</h2>

					<Card item={topUser} border={"50%"} />
				</div>
			</div>
		</div>
	);
}

export default Home;
