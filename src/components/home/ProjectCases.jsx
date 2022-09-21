import React from "react";
import { Card, Divider, Col, Row, } from 'antd';

// https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png
import  RollupImg from '@/assets/image/cases/rollup.png'

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
              cover={<img alt="example" className="case-item-img" src={RollupImg} />}
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
              cover={<img alt="example" className="case-item-img" src={RollupImg} />}
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
              cover={<img alt="example" className="case-item-img" src={RollupImg} />}
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
              cover={<img alt="example" className="case-item-img" src={RollupImg} />}
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
              cover={<img alt="example" className="case-item-img" src={RollupImg} />}
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
              cover={<img alt="example" className="case-item-img" src={RollupImg} />}
            >
              <Meta title="html2canvas" description="www.instagram.com" />
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
              <Meta title="X-mind" description="www.instagram.com" />
            </Card>
          </div>
        </Col>
      </Row>
      
      
    </div>
  )
};
export default Skills;

