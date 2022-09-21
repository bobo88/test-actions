import React, { lazy } from "react";

// 懒加载路由
const Home = lazy(() => import('@/pages/Home'));
const VuePage = lazy(() => import('@/pages/vue/Vue'));
const ReactPage = lazy(() => import('@/pages/react/React'));
const OtherPage = lazy(() => import('@/pages/other/Other'));
const About = lazy(() => import('@/pages/about/About'));

const routes = [
  {
    key: 'index',
    path: '/',
    element: <Home />
  },
  {
    key: 'home',
    path: '/home',
    element: <Home />
  },
  {
    key: 'vue',
    path: '/vue',
    element: <VuePage />
  },
  {
    key: 'react',
    path: '/react',
    element: <ReactPage />
  },
  {
    key: 'other',
    path: '/other',
    element: <OtherPage />
  },
  {
    key: 'about',
    path: '/about-me',
    element: <About />
  },
];

export default routes;
