import './i18n';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/main/MainLayout.jsx';
import Main from './pages/main/Main.jsx';
import Project from './pages/project/Project.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Main />} />
                    <Route path="/project/:slug" element={<Project />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
