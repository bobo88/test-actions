import React, { useState } from 'react';
import { Button } from 'antd';
import Banner from '@/components/home/Banner'
import Counter from '@/components/Counter'

// 全局loading组件
// import Loading from '@/components/loading/loading';

// import { useParams } from 'react-router-dom';

const App = () => {
    const [msg] = useState('我是msg信息688');
    const [isHot, setIsHot] = useState(false);
    // const params = useParams();
    // console.log(666, params, params.id)

    return (
        <div className='main-wrap'>
            <Banner />
            <h1>Home page</h1>
            <Counter />

            {/* <Loading /> */}
            <p className={ isHot ? 'red' : 'green' }>{ msg }</p>
            <p className='desc'>今天的天气真 <span className={ isHot ? 'red' : 'green' }>{ isHot ? '炎热' : '凉爽'}</span></p>
            <button onClick={ () => setIsHot(!isHot) } style={{ margin: '0 20px 0 0' }}>changeState</button>
            <input type="text" style={{marginRight: '20px'}} />
            <Button className='mr20' type="primary">Button 6</Button>
            <Button type="primary">Button 8</Button>
        </div>
    )
}
export default App;
