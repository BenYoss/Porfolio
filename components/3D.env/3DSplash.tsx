/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
import * as React from 'react';
import { Canvas } from 'react-three-fiber';
import DodeUI from './models/Dodecahedron';
import TetraUI from './models/AboutTetrahedron';
import TextMesh from './models/MeshText';

type Props = {
};

const Splash3D: React.FC<Props> = () => {
  const [hovered, setHovered] = React.useState([false, false, false, false]);
  const [clicked, setClicked] = React.useState([false, false, false, false]);
  const color = ['#F0FFFF', '#00CED1', '#9400D3', '#FF8C00'];

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
        <DodeUI />
        <TextMesh position={[6, 1, 0]} index={0} />
        <TetraUI
        position={[3, 0, 0]}
        clicked={clicked}
        setClicked={setClicked}
        hovered={hovered}
        color={color[0]}
        setHovered={setHovered}
        index={0} />
        <TextMesh position={[-6, 1, 0]} index={1} />
        <TetraUI
        position={[-3, 0, 0]}
        clicked={clicked}
        setClicked={setClicked}
        hovered={hovered}
        color={color[1]}
        setHovered={setHovered}
        index={1} />
        <TextMesh position={[-3.3, -0.9, 0]} index={2} />
        <TetraUI
        position={[-6, 0, 0]}
        clicked={clicked}
        setClicked={setClicked}
        hovered={hovered}
        color={color[2]}
        setHovered={setHovered}
        index={2} />
        <TextMesh position={[3.3, -0.9, 0]} index={3} />
        <TetraUI
        position={[6, 0, 0]}
        clicked={clicked}
        setClicked={setClicked}
        hovered={hovered}
        color={color[3]}
        setHovered={setHovered}
        index={3} />
    </Canvas>
  );
};

export default Splash3D;
