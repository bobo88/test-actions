import React, { useState } from 'react';
import { Button } from 'antd';
import Header from '../components/Header'
import {
    Link,
} from "react-router-dom";

const App = function () {
    const [msg] = useState('我是msg信息688');
    const [isHot, setIsHot] = useState(false);

    return (
        <div>
            <Header />
            <h1>Hello, React! (我来自GitHub actions 自动部署 888888)</h1>
            <p className={ isHot ? 'red' : 'green' }>{ msg }</p>
            <p className='desc'>今天的天气真 <span className={ isHot ? 'red' : 'green' }>{ isHot ? '炎热' : '凉爽'}</span></p>
            <button onClick={ () => setIsHot(!isHot) } style={{ margin: '0 20px 0 0' }}>changeState</button>
            <input type="text" style={{marginRight: '20px'}} />
            <Button className='mr20' type="primary">Button 6</Button>
            <Button type="primary">Button 8</Button>
            <Link to="about-me">about</Link>
        </div>
    )
}
export default App;
