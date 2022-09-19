import React from 'react';
// import { Button } from 'antd';
// import Header from '../components/Header'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";

import Layout from '../layout/Layout'
import Home from '../pages/Home'
import About from './pages/About'

const App = function () {
    // const [msg, setMsg] = useState('我是msg信息688');
    // const [isHot, setIsHot] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about-me" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
