import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';

const color = '#1B1B1B';

let x: number = 0.01;
const DodeUI: Function = () => {
  const mesh = useRef<THREE.Object3D>();
  useFrame(({ mouse }) => {
    mesh.current.rotation.x = mouse.x * 0.2;
    mesh.current.rotation.z = mouse.y * 0.1;
    mesh.current.rotation.y += 0.003;
    if (x < 1.5) {
      mesh.current.scale.set(x, x, x);
      x += 0.05;
    }
  });

  return (
        <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
            <dodecahedronBufferGeometry attach="geometry" args={[1, 1]} />
            <meshPhongMaterial attach="material" color={color} flatShading shininess={4} />
        </mesh>
  );
};

export default DodeUI;
