import React from "react";
import { Button, Divider } from 'antd';

const Skills: React.FC = () => {
  return (
    <div className="skills-box mb20">
      <Divider orientation="left">技能</Divider>
      <Button className="mr20 mb5"  type="default">Vue</Button>
      <Button className="mr20 mb5"  type="default">React</Button>
      <Button className="mr20 mb5"  type="default">Javascript</Button>
      <Button className="mr20 mb5"  type="default">Typescript</Button>
      <Button className="mr20 mb5"  type="default">CSS</Button>
      <Button className="mr20 mb5"  type="default">HTML</Button>
      <Button className="mr20 mb5"  type="default">Node/Express/Koa</Button>
      <Button className="mr20 mb5"  type="default">Nginx</Button>
      <Button className="mr20 mb5"  type="default">Less/Sass</Button>
      <Button className="mr20 mb5"  type="default">ElementUI</Button>
      <Button className="mr20 mb5"  type="default">Antd</Button>
      <Button className="mr20 mb5"  type="default">Vant</Button>
    </div>
  )
};
export default Skills;

