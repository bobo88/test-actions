import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";

// React-redux
import { Provider } from 'react-redux'
import store from './store'
// 持久化：本质还是把store存到 local Storage 里面
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

// 全局样式
import './assets/scss/index.scss';

// React-router
import {
    BrowserRouter,
    Routes,
    Route,
    // Link,
    // Outlet
} from "react-router-dom";

// 布局 & 路由页面
import Layout from './layout/Layout'
// 懒加载路由
const Home = lazy(() => import('./pages/Home'));
const VuePage = lazy(() => import('./pages/vue/Vue'));
const ReactPage = lazy(() => import('./pages/react/React'));
const OtherPage = lazy(() => import('./pages/other/Other'));
const About = lazy(() => import('./pages/about/About'));

const root = createRoot(document.getElementById("root"));

// 持久化
let persistor = persistStore(store);

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Suspense fallback={<h2>Loading..</h2>}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/vue" element={<VuePage />} />
                            <Route path="/react" element={<ReactPage />} />
                            <Route path="/other" element={<OtherPage />} />
                            <Route path="/about-me" element={<About />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </PersistGate>
    </Provider>
);
