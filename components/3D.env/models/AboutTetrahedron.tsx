import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';

// const color = '#00CED1';
let rendered = false;
let x: number = 0.01;

const TetraUI: Function = ({
  position, hovered, setHovered, color, index,
}) => {
  const mesh = useRef<THREE.Object3D>();

  useFrame(({ mouse }) => {
    mesh.current.position.y = -2;
    mesh.current.rotation.x = mouse.x * 0.2;
    mesh.current.rotation.z = mouse.y * 0.1;
    mesh.current.rotation.y += 0.003;
    if (hovered[index]) {
      mesh.current.rotation.x += 0.1;
      mesh.current.rotation.y += 0.1;
      mesh.current.rotation.z += 0.1;
      if (x < 1.3) {
        mesh.current.scale.set(x, x, x);
        x += 0.05;
      }
    } else if (!hovered[index] && x > 0.8) {
      x = 0.8;
    }
    // if (!click && position[0] > -(position[0] / 2)) {
    //   mesh.current.position.x += 0.005;
    //   mesh.current.position.y += 0.1;
    //   mesh.current.position.z -= 0.002;
    // }
    if (rendered) {
      if (index > 1) {
        mesh.current.position.x = position[0] + mouse.x * 0.4;
        mesh.current.position.y = position[2] + mouse.y * 0.2;
        mesh.current.position.z = position[2] + mouse.x * 0.008;
      } else {
        mesh.current.position.x = position[0] + mouse.x * 0.2;
        mesh.current.position.y = position[2] + mouse.y * 0.1;
        mesh.current.position.z = position[2] + mouse.x * 0.004;
      }
    }
    if (x === 0.8) {
      rendered = true;
    }
    if (x <= 0.8 && !rendered) {
      mesh.current.scale.set(x, x, x);
      x += 0.05;
    }
  });

  return (
        <mesh ref={mesh} key={index}
         rotation={[-Math.PI / 2, 0, 0]} position={position} onPointerOver={() => {
           const hoverList = [...hovered];
           hoverList[index] = true;
           setHovered([...hoverList]);
         }} onPointerOut={() => {
           const hoverList = [...hovered];
           hoverList[index] = false;
           setHovered([...hoverList]);
         }}>
            <tetrahedronBufferGeometry attach="geometry" args={[1, 1]} />
            <meshPhongMaterial attach="material" color={color} flatShading shininess={4} />
        </mesh>
  );
};

export default TetraUI;
