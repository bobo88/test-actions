import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import App from "../pages/App";
import Home from "../pages/Home";
import About from "../pages/About";

import AuthLayout from '../hooks/AuthLayout'

// import { Button } from 'antd';

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App />
      ),
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "about-me",
      element: <About />,
    },
    {
      path: 'auth',
      element: <AuthLayout />,
      children: [
        // {
        //   path: "login",
        //   element: <Login />,
        //   loader: redirectIfUser,
        // },
        // {
        //   path: "logout",
        //   action: logoutUser,
        // },
      ],
    },
]);

export default router;