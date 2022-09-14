import React, { useState } from 'react';
import { Button, Timeline } from 'antd';

const App = function () {
    const [msg] = useState('Nginx 负载均衡 Test');
    // const [isHot, setIsHot] = useState(false);

    return (
        <div className='main-wrap'>
            <h1>Other page</h1>
            <Timeline>
                <Timeline.Item>
                    <Button type="primary">{ msg }</Button>
                </Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
            {/* <ul>
            http://101.37.253.140/nginx-test
            </ul>
            <p className={ isHot ? 'red' : 'green' }>{ msg }</p>
            <p className='desc'>今天的天气真 <span className={ isHot ? 'red' : 'green' }>{ isHot ? '炎热' : '凉爽'}</span></p>
            <button onClick={ () => setIsHot(!isHot) } style={{ margin: '0 20px 0 0' }}>changeState</button>
            <input type="text" style={{marginRight: '20px'}} />
            <Button className='mr20' type="primary">Button 6</Button>
            <Button type="primary">Button 8</Button> */}
        </div>
    )
}
export default App;
