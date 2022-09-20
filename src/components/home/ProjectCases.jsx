import React from "react";
import { Card, Divider, Col, Row, } from 'antd';

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
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={{ xs: 24, sm: 12, md: 6, lg: 6 }}>
          <div className="card-item mb20">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={{ xs: 24, sm: 12, md: 6, lg: 6 }}>
          <div className="card-item mb20">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={{ xs: 24, sm: 12, md: 12, lg: 6 }}>
          <div className="card-item mb20">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
        </Col>
      </Row>
      
      
    </div>
  )
};
export default Skills;

