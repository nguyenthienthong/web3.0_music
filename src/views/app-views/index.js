import { Layout } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../components/layoutComponent/footer';
import Header from '../../components/layoutComponent/header';
import Home from './Home';
import Login from './Login';
const { Content } = Layout;
const AppViews = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <Routes>
                    <Route path="*" element={<Home />}></Route>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Content>
            <Footer />
        </Layout>
    );
};

export default AppViews;
