import React from "react";
import { Layout, BackTop } from 'antd';

import {
  Outlet
} from "react-router-dom";

// 布局组件
import Top from './Top'
import Bottom from './Bottom'

// antd 布局
const { Header, Footer, Content } = Layout;

const LayoutCustom = (props) =>{
  console.log(6666, props)
  return (
    <>
      <Layout>

        <Header>
          <Top />
        </Header>

        <Content>
          <Outlet />
        </Content>

        <Footer>
          <Bottom />
        </Footer>

        <BackTop visibilityHeight={50} />
      </Layout>
    </>
  )
}

export default LayoutCustom;
