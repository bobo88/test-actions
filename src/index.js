import React from "react";
import { createRoot } from "react-dom/client";

import './assets/scss/index.scss';

import {
    BrowserRouter,
    Routes,
    Route,
    // Link,
    // Outlet
} from "react-router-dom";

import Layout from './layout/Layout'
import Home from './pages/Home'
import VuePage from './pages/Vue'
import ReactPage from './pages/React'
import OtherPage from './pages/Other'
import About from './pages/About'

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/vue" element={<VuePage />} />
                <Route path="/react" element={<ReactPage />} />
                <Route path="/other" element={<OtherPage />} />
                <Route path="/about-me" element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
