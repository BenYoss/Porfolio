import { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';

let x: number = 0.01;
const DodeUI: Function = ({ colors, clicked, hovered, setHovered }) => {
  const [color, setColor] = useState('#1B1B1B');
  const mesh = useRef<THREE.Object3D>();

  useFrame(({ mouse }) => {
    mesh.current.rotation.x = mouse.x * 0.2;
    mesh.current.rotation.z = mouse.y * 0.1;
    mesh.current.rotation.y += 0.003;
    if (hovered[4]) {
      colors.forEach((type, i) => {
        if (clicked[i]) {
          setColor(type);
        }
      });
    } else {
      setColor('#1B1B1B');
    }
    if (x < 1.5) {
      mesh.current.scale.set(x, x, x);
      x += 0.05;
    }
  });

  return (
        <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} onPointerOver={() => {
          clicked.forEach((click) => {
            if (click) {
              const hoveredList = [...hovered];
              hoveredList[4] = true;
              setHovered(hoveredList);
            }
          });
        }}
        onPointerOut={() => {
          const hoveredList = [...hovered];
          hoveredList[4] = false;
          setHovered(hoveredList);
        }}>
            <dodecahedronBufferGeometry attach="geometry" args={[1, 1]} />
            <meshPhongMaterial attach="material" color={color} flatShading shininess={4} />
        </mesh>
  );
};

export default DodeUI;
