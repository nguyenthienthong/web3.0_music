import "./_sidebar.scss";
import React from "react";
import {
	DeploymentUnitOutlined,
	HeartFilled,
	HomeOutlined,
	PlusSquareFilled,
	SearchOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
	return (
		<>
			<div id="sidebar">
				<div id="logo">
					<img
						src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White-768x230.png"
						alt="logo"
					/>
				</div>
				<ul>
					<li>
						<a href="/">
							<p>
								<HomeOutlined />
							</p>
							<p>Trang chủ</p>
						</a>
					</li>
					<li>
						<a href="/">
							<p>
								<SearchOutlined />
							</p>
							<p>Tìm kiếm</p>
						</a>
					</li>
					<li>
						<a href="/">
							<p>
								<DeploymentUnitOutlined />
							</p>
							<p>Thư viện</p>
						</a>
					</li>
				</ul>

				<ul>
					<li>
						<a href="/">
							<p>
								<PlusSquareFilled />
							</p>
							<p>Tạo playlist</p>
						</a>
					</li>
					<li>
						<a href="/">
							<p>
								<HeartFilled />
							</p>
							<p>Bài hát yêu thích</p>
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
