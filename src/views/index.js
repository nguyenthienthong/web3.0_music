import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppViews from './app-views';

const Views = () => {
    // const isLogin = true;
    return (
        <React.StrictMode>
            <Routes>
                <Route path="*" element={<AppViews />} />
            </Routes>
        </React.StrictMode>
    );
};

export default Views;
