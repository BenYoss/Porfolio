import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from 'react-spring/three';
import dynamic from 'next/dynamic';

const ProjectMesh = ({
  position, rotation, texture, clicked, setClicked, index,
}) => {
  // const mesh = useRef<THREE.Object3D>();
  const x = 3;
  const {
    color, rot, pos, scale,
  } = useSpring({
    color: clicked ? 'white' : 'red',
    pos: clicked ? [position[index][0], position[index][1], position[index][2]]
      : [position[index][0] + 0.1, position[index][1], position[index][2]],
  });

  useFrame(() => {
    //   // console.log(clicked[index]);
    //   mesh.current.position.set(position[index][0], position[index][1], position[index][2]);
    //   mesh.current.rotation.x = 0;
    //   // mesh.current.rotation.z = 2;
    //   // mesh.current.rotation.x = mouse.x * 0.1;
    //   // mesh.current.rotation.z = mouse.y * 0.05;
    //   // mesh.current.rotation.y = mouse.x * 0.3;
    //   if (clicked[index]) {
    //     if (x < 3.3) {
    //       mesh.current.scale.set(x * 1.5, x, x);
    //       x += 0.01;
    //     }
    //     if (position[index][0] >= -2) {
    //       position[index][0] -= 0.1;
    //     }
    //     if (mesh.current.rotation.y <= 0) {
    //       mesh.current.rotation.y += 0.05;
    //     }
    //   } else {
    //     if (x > 2.9) {
    //       mesh.current.scale.set(x, x, x);
    //       x -= 0.05;
    //     }
    //     if (position[index][0] < 0) {
    //       position[index][0] += 0.1;
    //     }
    //     if (mesh.current.rotation.y > -0.6) {
    //       mesh.current.rotation.y -= 0.05;
    //     }
    //   }
    // mesh.current.position.set(pos[0], pos[1], pos[2]);
  });
  return (
    <group>
        <animated.mesh position={pos} onClick={() => {
          const clickList = [...clicked];
          const test = [...clickList];
          console.log(test.splice(index, 1).includes(true));
          if (!test.splice(index, 1).includes(true)) {
            clickList[index] = !clickList[index];
          }
          setClicked([...clickList]);
        }}>
            <planeBufferGeometry attach="geometry" args={[1, 1]} />
            <animated.meshPhongMaterial attach="material" map={texture} color={color} />
        </animated.mesh>
    </group>
  );
};

export default dynamic(() => Promise.resolve(ProjectMesh), { ssr: false });
