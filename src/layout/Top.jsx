import React from "react";
import { Col, Row, } from 'antd';
import { FunctionOutlined } from '@ant-design/icons';
import {
  Link,
  NavLink,
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
            <NavLink to='home' className={(navData) => (navData.isActive ? 'active link' : 'link')}>Home</NavLink>
            <NavLink to='project-cases' className={(navData) => (navData.isActive ? 'active link' : 'link')}>Project cases</NavLink>
            {/* <NavLink to='react' className={(navData) => (navData.isActive ? 'active link' : 'link')}>React</NavLink>
            <NavLink to='other' className={(navData) => (navData.isActive ? 'active link' : 'link')}>Other</NavLink> */}
            <NavLink to='about-me' className={(navData) => (navData.isActive ? 'active link' : 'link')}>About me</NavLink>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Top; 
