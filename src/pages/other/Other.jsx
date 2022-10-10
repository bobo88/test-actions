import React, { useState } from 'react';
import { Timeline } from 'antd';
import Parent from '@/components/cases/lifecircle/Parent'

const App = function () {
    const [msg] = useState('Nginx 负载均衡 Test');

    return (
        <div className='main-wrap'>
            <h1>Other page</h1>
            <Timeline>
                <Timeline.Item>
                    <p>父子组件生命周期</p>
                    <Parent />
                </Timeline.Item>
                <Timeline.Item>todo</Timeline.Item>
            </Timeline>
        </div>
    )
}
export default App;
