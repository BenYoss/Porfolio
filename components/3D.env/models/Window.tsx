import { useRef, useEffect } from 'react';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { useThree as useThreeCSS3D, useFrame as CSSFrame } from 'react-three-fiber/css3d';
// import { Canvas, useLoader, useFrame } from 'react-three-fiber';
// import * as THREE from 'three';

const Window: Function = ({
  dom, position, scale, color, rotation, clicked, index,
}) => {
  const { scene } = useThreeCSS3D();
  const ref = useRef<CSS3DObject | null>(null);
  const pos = position;
  CSSFrame(({ mouse }) => {
    ref.current.position.x = mouse.x * 0.01;
  });

  if (clicked) {
    pos[2] = (pos[2] + 4) / 2;
    pos[1] = (pos[1] + 4) * 2;
    pos[0] = (pos[0] - 0.2) / 4;
  }

  const prop = {
    position: [...position],
  };

  prop.position[2] = -10;

  //   const posit = position || [-9, 2, -13];
  //   const newPos = new THREE.Vector3(posit[0] * 90, posit[1] * 10, posit[2] * 140);
  //   const newRot = new THREE.Euler(rot[0], rot[1], rot[2]);

  useEffect(() => {
    ref.current = new CSS3DObject(dom.current);
    // ref.current.position.copy(newPos);
    // ref.current.scale.copy(scale);
    // ref.current.rotation.copy(newRot);
    scene.add(ref.current);
    return () => { scene.remove(ref.current); };
  }, [dom, position, scale, rotation, color]);

  return null;
};

export default Window;
