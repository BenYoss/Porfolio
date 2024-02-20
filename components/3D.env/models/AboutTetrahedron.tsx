import { useRef } from 'react';
import { WebGLShadowMap } from 'three';;
import { useFrame } from '@react-three/fiber';

let rendered = false;
let x: number = 0.01;

const TetraUI: Function = ({
  position, clicked, hovered, setHovered, color, index, setClicked,
}) => {
  const mesh = useRef<any>();
  useFrame(({ mouse }) => {
    mesh.current.position.y = -2;
    mesh.current.rotation.x = mouse.x * 0.2;
    mesh.current.rotation.z = mouse.y * 0.1;
    mesh.current.rotation.y += 0.003;
    document.getElementsByTagName('canvas')[0].style.cursor = 'default';
    if (hovered[0] || hovered[1] || hovered[2]) {
      document.getElementsByTagName('canvas')[0].style.cursor = 'pointer';
    }
    if (hovered[index]) {
      document.getElementsByTagName('canvas')[0].style.cursor = 'pointer';
      mesh.current.rotation.x += 0.1;
      mesh.current.rotation.y += 0.1;
      mesh.current.rotation.z += 0.1;
    } else if (!hovered[index] && x > 0.8) {
      x = 0.8;
    }
    if (clicked[index]) {
      mesh.current.position.x = mouse.x * 8;
      mesh.current.position.y = mouse.y * 4;
    }
    if (rendered && !clicked[index]) {
      if (index > 1) {
        mesh.current.position.x = position[0] + mouse.x * 0.4;
        mesh.current.position.y = position[2] + mouse.y * 0.2;
        mesh.current.position.z = position[2] + mouse.x * 0.01;
      } else {
        mesh.current.position.x = position[0] + mouse.x * 0.2;
        mesh.current.position.z = position[2] + mouse.x * 0.004;
      }
    }
    if (x === 0.8) {
      rendered = true;
    }
    if (x > 0.8) {
      x = 0.8;
      mesh.current.scale.set(x, x, x);
    } else if (x <= 0.8) {
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
         }}
         onClick={() => {
           const clickList = [...clicked];
           clickList[index] = !clickList[index];
           setClicked([...clickList]);
         }}>
            <tetrahedronBufferGeometry attach="geometry" args={[1, 1]} />
            <meshPhongMaterial attach="material" color={color} flatShading shininess={4} />
        </mesh>
  );
};

export default TetraUI;
