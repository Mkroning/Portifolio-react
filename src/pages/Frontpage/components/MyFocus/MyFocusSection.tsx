import React from 'react';
// import { Container } from './styles';
import {
  JSIcon,
  NodeIcons,
  ReactIcon,
  TSIcon
} from './../../styles';

const MyFocusSection: React.FC = () => {
  return (
    <>
     <ul>
     <li>
          <TSIcon/>
          <p>Typescript</p>
        </li>
        <li>
          <JSIcon/>
          <p>Javascript</p>
        </li>
        <li>
          <ReactIcon/>
          <p>React</p>
        </li>
        <li>
          <NodeIcons/>
          <p>NodeJS</p>
        </li>
     </ul>
    </>
  );
}

export default MyFocusSection;
