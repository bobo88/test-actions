import React from 'react';
import { Button } from 'antd';
import './assets/scss/index.css'

import { getArticleList } from "./api/index.js";

const msg = '我是msg信息 688'

// 类组件
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHot: true
        };
    }

    componentDidMount() {
        getArticleList().then(
           (res) => {
               console.log("get article response:", res);
           },
          (error) => {
               console.log("get response failed!");
           }
        );
     }
    
    render() {
        console.log(this);
        const { isHot } = this.state;
        return (
            <div>
                <h1>Hello, React! (我来自GitHub actions 自动部署）</h1>
                <p className={ isHot ? 'red' : 'green' }>{ msg }</p>
                <p className='desc'>今天的天气真 <span className={ isHot ? 'red' : 'green' }>{ isHot ? '炎热' : '凉爽'}</span></p>
                <button onClick={ this.changeState.bind(this) } style={{ margin: '0 20px 0 0' }}>changeState</button>
                <input type="text" style={{marginRight: '20px'}} />
                <Button type="primary">Button 1</Button>
                <Button type="primary">Button 2</Button>
                <Button type="primary">Button 3</Button>
            </div>
        );
    }

    changeState() {
        console.log(this.state)
        this.setState({
            isHot: !this.state.isHot
        })
        // this.state = { isHot: false}
    }
}

export default App;