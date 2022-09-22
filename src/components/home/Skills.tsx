import React from "react";
import { Button, Divider } from 'antd';

const Skills: React.FC = () => {
  return (
    <div className="skills-box mb20">
      <Divider orientation="left">Skills</Divider>
      <Button className="mr20 mb20"  type="primary">Vue</Button>
      <Button className="mr20 mb20"  type="primary">React</Button>
      <Button className="mr20 mb20"  type="primary">Javascript</Button>
      <Button className="mr20 mb20"  type="primary">Typescript</Button>
      <Button className="mr20 mb20"  type="primary">CSS</Button>
      <Button className="mr20 mb20"  type="primary">HTML</Button>
      <Button className="mr20 mb20"  type="primary">Node/Express/Koa</Button>
      <Button className="mr20 mb20"  type="primary">Nginx</Button>
      <Button className="mr20 mb20"  type="primary">Less/Sass</Button>
      <Button className="mr20 mb20"  type="primary">ElementUI</Button>
      <Button className="mr20 mb20"  type="primary">Antd</Button>
      <Button className="mr20 mb20"  type="primary">Vant</Button>
    </div>
  )
};
export default Skills;

