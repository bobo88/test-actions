import React from "react";
import { Progress, Divider } from 'antd';

const Skills = () => {
  return (
    <div className="skills-box mb20">
      <Divider orientation="left">Skills</Divider>
      <Progress type="circle" className="mr20" width={80} format={() => 'Vue'} percent={75} />
      <Progress type="circle" className="mr20" width={80} format={() => 'JS'} percent={70} />
      <Progress type="circle" className="mr20" width={80} format={() => 'TS'} percent={90} />
      <Progress type="circle" className="mr20" width={80} format={() => 'CSS'} percent={90} />
      <Progress type="circle" className="mr20" width={80} format={() => 'Node'} percent={90} />
      <Progress type="circle" className="mr20" width={80} format={() => 'Nginx'} percent={90} />
    </div>
  )
};
export default Skills;

