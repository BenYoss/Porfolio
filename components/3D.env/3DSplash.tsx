/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
import * as React from 'react';
import { Canvas } from 'react-three-fiber';
import DodeUI from './models/Dodecahedron';
// import Controls from './Controls';

type Props = {
};

const Splash3D: React.FC<Props> = () => (
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
    </Canvas>
);

export default Splash3D;
