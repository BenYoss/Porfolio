/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
import * as React from 'react';
import * as THREE from 'three';
// import { Canvas as CanvasCSS } from 'react-three-fiber/css3d';
// import Window from './models/Window';

type Props = {
    colors: [],
    clickList: [],
    positions: [],
};

const CSSSplash3D: React.FC<Props> = ({ colors, clickList, positions }) => {
  const refList = [
    React.useRef<null>(), React.useRef<null>(), React.useRef<null>(), React.useRef<null>(),
  ];
  return (
    // <CanvasCSS>
    //     {
    //         refList.map((ref, i) => (
    //                 <Window
    //                 dom={ref}
    //                 position={positions[i]}
    //                 scale={new THREE.Vector3(1.3, 1.3, 1.3)}
    //                 color={new THREE.Color(colors[i])}
    //                 rotation={[-0.9, 0, 0]}
    //                 key={String(i)}
    //                 index={i}
    //                 clicked={clickList[i]}/>
    //         ))
    //     }
    // </CanvasCSS>
    <h2>help</h2>
  );
};

export default CSSSplash3D;
