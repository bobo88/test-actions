import React from "react";
import { Card, Divider, Col, Row, } from 'antd';

// https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png
import  RollupImg from '@/assets/image/cases/rollup.png'
import  NodeImg from '@/assets/image/cases/node.png'
import  ReactImg from '@/assets/image/cases/react.png'
import  HtmlImg from '@/assets/image/cases/html.png'
import  NuxtImg from '@/assets/image/cases/nuxt.png'
import  VueImg from '@/assets/image/cases/vue.png'
import  VueTsImg from '@/assets/image/cases/vue_ts.jpg'
import  EchartsImg from '@/assets/image/cases/echarts.jpg'

const { Meta } = Card;

const Skills = () => {
  return (
    <div className="project-cases-box mb20">
      <Divider orientation="left">Project cases</Divider>

      <Row gutter={16} justify="space-around">
        <Col className="gutter-row" span={{ xs: 24, sm: 12, md: 6, lg: 6 }}>
          <div className="card-item mb20">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" className="case-item-img" src={VueTsImg} />}
            >
              <Meta title="Vue3/vite/TS" description="www.instagram.com" />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={{ xs: 24, sm: 12, md: 6, lg: 6 }}>
          <div className="card-item mb20">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" className="case-item-img" src={ReactImg} />}
            >
              <Meta title="React" description="www.instagram.com" />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={{ xs: 24, sm: 12, md: 6, lg: 6 }}>
          <div className="card-item mb20">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" className="case-item-img" src={EchartsImg} />}
            >
              <Meta title="Vue2/Echarts" description="www.instagram.com" />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={{ xs: 24, sm: 12, md: 6, lg: 6 }}>
          <div className="card-item mb20">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" className="case-item-img" src={VueImg} />}
            >
              <Meta title="Vue2-admin" description="www.instagram.com" />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={{ xs: 24, sm: 12, md: 12, lg: 6 }}>
          <div className="card-item mb20">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" className="case-item-img" src={NuxtImg} />}
            >
              <Meta title="Nuxt" description="www.instagram.com" />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={{ xs: 24, sm: 12, md: 12, lg: 6 }}>
          <div className="card-item mb20">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" className="case-item-img" src={RollupImg} />}
            >
              <Meta title="Rollup/Gulp" description="www.instagram.com" />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={{ xs: 24, sm: 12, md: 12, lg: 6 }}>
          <div className="card-item mb20">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" className="case-item-img" src={NodeImg} />}
            >
              <Meta title="Express/Node" description="www.instagram.com" />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={{ xs: 24, sm: 12, md: 12, lg: 6 }}>
          <div className="card-item mb20">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" className="case-item-img" src={HtmlImg} />}
            >
              <Meta title="html2canvas" description="www.instagram.com" />
            </Card>
          </div>
        </Col>
        {/* <Col className="gutter-row" span={{ xs: 24, sm: 12, md: 12, lg: 6 }}>
          <div className="card-item mb20">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" className="case-item-img" src={RollupImg} />}
            >
              <Meta title="X-mind" description="www.instagram.com" />
            </Card>
          </div>
        </Col> */}
      </Row>
      
      
    </div>
  )
};
export default Skills;

