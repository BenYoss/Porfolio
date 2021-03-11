/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as THREE from 'three';
import {
  useState, useEffect, Suspense, useRef,
} from 'react';
import { Canvas } from 'react-three-fiber';
import ProjectMesh from './models/Projects';

const position = [[0, -4, 0], [0, 0, 0], [0, 4, 0]];
const Projects3D = () => {
  const [texture, setTexture] = useState(false);
  const [clicked, setClicked] = useState([false, false, false, false]);
  const spotlight = useRef(new THREE.PointLight(0xffffff, 1, 200));
  useEffect(() => {
    const tex = new THREE.TextureLoader().load('https://blog.hslu.ch/majorobm/files/2019/05/black_cubes_2-wallpaper-1920x1080-702x336.jpg');
    if (!texture) {
      setTexture(tex);
    }
  }, [texture]);
  return (
    <Canvas>
            <Suspense fallback={
                <mesh>
                <sphereBufferGeometry attach="geometry" args={[0.7, 30, 30]} />
                <meshBasicMaterial attach="material" color={0xfff1ef} />
            </mesh>}>
            </Suspense>
            <directionalLight intensity={0.5} />
            <ambientLight intensity={0.5} />
            <pointLight ref={spotlight} angle={0.9} />
            <spotLight position={[20, 20, 10]} angle={0.9} />
            <ProjectMesh texture={texture} spotlight={spotlight}
            clicked={clicked} index={0} setClicked={setClicked} position={position} />
            <ProjectMesh texture={texture} spotlight={spotlight}
            clicked={clicked} index={1} setClicked={setClicked} position={position} />
            <ProjectMesh texture={texture} spotlight={spotlight}
            clicked={clicked} index={2} setClicked={setClicked} position={position} />
    </Canvas>);
};

export default Projects3D;
