import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/layoutComponent/Header/Header";
import Sidebar from "../../components/layoutComponent/Sidebar/Sidebar";
import NotFound from "../notFound/404";
import Home from "./Home";
import Post from "./Post";
const { Content } = Layout;
const AppViews = () => {
	return (
		<Layout>
			<Header />
			<main id="main_container">
				<Sidebar />
				<Content id="container">
					<Routes>
						<Route exact path="/" element={<Home />}></Route>
						<Route exact path="/post" element={<Post />}></Route>
						<Route path="*" element={<NotFound />}></Route>
					</Routes>
				</Content>
			</main>
			{/* <Footer /> */}
		</Layout>
	);
};

export default AppViews;
