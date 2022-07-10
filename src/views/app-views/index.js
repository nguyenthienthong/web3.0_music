import { Layout } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../components/layout/footer';
import Header from '../../components/layout/header';
import Home from './Home';
import Login from './Login';
import Search from './Search';
const { Content } = Layout;
const AppViews = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <Routes>
                    <Route path="*" element={<Home />}></Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/search" element={<Search></Search>}></Route>
                </Routes>
            </Content>
            <Footer />
        </Layout>
    );
};

export default AppViews;
