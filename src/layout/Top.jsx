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
              <FunctionOutlined style={{ fontSize: '32px', color: '#fff' }} /><span className="logo-desc">WEB-front-end</span>
            </Link>
          </Col>
          <Col span={18}>
            {/* target="_blank" rel="noopener noreferrer" */}
            <a className="link" href="http://docs.ycy88.com">Docs</a>
            {/* <NavLink to='home' className={(navData) => (navData.isActive ? 'active link' : 'link')}>Docs</NavLink> */}
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
