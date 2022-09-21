import React from "react";
import { Button, Divider } from 'antd';

const Skills: React.FC = () => {
  return (
    <div className="skills-box mb20">
      <Divider orientation="left">Skills</Divider>
      <Button className="mr20"  type="primary">Vue</Button>
      <Button className="mr20"  type="primary">JS</Button>
      <Button className="mr20"  type="primary">TS</Button>
      <Button className="mr20"  type="primary">CSS</Button>
      <Button className="mr20"  type="primary">Node</Button>
      <Button className="mr20"  type="primary">Nginx</Button>
      <Button className="mr20"  type="primary">React</Button>
      <Button className="mr20"  type="primary">Less/Sass</Button>
    </div>
  )
};
export default Skills;

