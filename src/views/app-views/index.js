import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/layoutComponent/Footer/Footer";
import Header from "../../components/layoutComponent/Header/Header";
<<<<<<< HEAD
import Sidebar from "../../components/layoutComponent/Sidebar/Sidebar";
=======
>>>>>>> b1399562fff758814322f4017602b728fe3f5d7d
import NotFound from "../notFound/404";
import Home from "./Home";
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
						<Route path="*" element={<NotFound />}></Route>
					</Routes>
				</Content>
			</main>
			{/* <Footer /> */}
		</Layout>
	);
};

export default AppViews;
