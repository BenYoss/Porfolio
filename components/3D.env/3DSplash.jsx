/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import DodeUI from './models/Dodecahedron';
import TetraUI from './models/AboutTetrahedron';
import TextMesh from './models/MeshText';
import dynamic from 'next/dynamic';

const Splash3D = ({ router, dodeHover, setDodeHover }) => {
  const [hovered, setHovered] = React.useState([false, false, false, false, false]);
  const [clicked, setClicked] = React.useState([false, false, false, false]);
  const color = ['#F0FFFF', '#00CED1', '#9400D3', '#FF8C00'];

  React.useEffect(() => {
    console.log('test');
    if (hovered[4]) {
      document.getElementById('icon').style.opacity = 0;
      setDodeHover(true);
    }
  }, [hovered, dodeHover, setDodeHover]);

  return (
    <Canvas>
        <React.Suspense fallback={
            <mesh>
            <sphereBufferGeometry attach="geometry" args={[0.7, 30, 30]} />
            <meshBasicMaterial attach="material" color={0xfff1ef} />
        </mesh>}>
        </React.Suspense>
        <ambientLight />
        <pointLight position={[10, 0, 10]} intensity={2} />
        <DodeUI clicked={clicked} colors={color} hovered={hovered} setHovered={setHovered}
        setClicked={setClicked} router={router} />
        <TextMesh position={[4.9, 1, 0]} index={0} />
        <TetraUI
        position={[3, 0, 0]}
        clicked={clicked}
        setClicked={setClicked}
        hovered={hovered}
        color={color[0]}
        setHovered={setHovered}
        index={0} />
        <TextMesh position={[-4.9, 1, 0]} index={1} />
        <TetraUI
        position={[-3, 0, 0]}
        clicked={clicked}
        setClicked={setClicked}
        hovered={hovered}
        color={color[1]}
        setHovered={setHovered}
        index={1} />
        <TextMesh position={[-3.2, -0.9, 0]} index={2} />
        <TetraUI
        position={[-5, 0, 0]}
        clicked={clicked}
        setClicked={setClicked}
        hovered={hovered}
        color={color[2]}
        setHovered={setHovered}
        index={2} />
        <TextMesh position={[3.2, -0.9, 0]} index={3} />
        <TetraUI
        position={[5, 0, 0]}
        clicked={clicked}
        setClicked={setClicked}
        hovered={hovered}
        color={color[3]}
        setHovered={setHovered}
        index={3} />
    </Canvas>
  );
};

export default dynamic(() => Promise.resolve(Splash3D), { ssr: false });
