import React from "react";
import { Col, Row, } from 'antd';
import { FunctionOutlined } from '@ant-design/icons';
import {
  Link
} from "react-router-dom";

const Top = () => {
  return (
    <div className="top-box">
      <div>
        <Row>
          <Col span={6}>
            <Link to='/' className="link">
              <FunctionOutlined style={{ fontSize: '32px', color: '#fff' }} />WEB-front-end
            </Link>
          </Col>
          <Col span={18}>
            <Link to='/home/testabc' className="link">Home</Link>
            <Link to='vue' className="link">Vue</Link>
            <Link to='react' className="link">React</Link>
            <Link to='other' className="link">Other</Link>
            <Link to='about-me' className="link">About me</Link>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Top; 
