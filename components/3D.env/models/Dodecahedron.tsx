import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

let x: number = 0.01;

const realColors = {
  '#F0FFFF': '#f5f6f6',
  '#00CED1': '#caf1f0',
  '#9400D3': '#f168f5',
  '#FF8C00': '#f7b93e',
};

const DodeUI: Function = ({
  colors, clicked, hovered, setHovered, setClicked, router, setDodeFinish,
}) => {
  const [color, setColor] = useState('#1B1B1B');
  const [recordedClick, setRecordedClick] = useState(0);
  const [activated, setActivated] = useState(false);
  const urls = ['/projects', '/contact', '/skills', '/about'];

  const mesh = useRef<any>();
  useEffect(() => {
    console.log('hit');
    if (x > 3) {
      setTimeout(() => {
        router.push(urls[recordedClick]);
        x = 1.0;
        setDodeFinish(true);
        setColor('#1B1B1B');
      }, 1000);
    }
  }, [x, router, clicked, colors]);

  useFrame(({ mouse }) => {
    mesh.current.rotation.x = mouse.x * 0.2;
    mesh.current.rotation.z = mouse.y * 0.1;
    mesh.current.rotation.y += 0.003;
    if (hovered[4] || activated) {
      colors.forEach((type, i) => {
        if (clicked[i]) {
          setActivated(true);
          setColor(type);
        }
      });
      clicked.forEach((click) => {
        if (!click[recordedClick]) {
          mesh.current.scale.set(x, x, x);
          if (x < 4.9) {
            if (x > 3) {
              x += 0.03;
            } else {
              x += 0.008;
            }
          }
        }
      });
    }
    if (x < 1.5) {
      mesh.current.scale.set(x, x, x);
      x += 0.05;
    }
  });

  return (
        <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} onPointerOver={() => {
          clicked.forEach((click, i) => {
            if (click) {
              const hoveredList = [...hovered];
              hoveredList[4] = true;
              setHovered(hoveredList);
              const clickList = [...clicked];
              clickList[i] = false;
              setTimeout(() => {
                setClicked([...clickList]);
              }, 100);
              setRecordedClick(i);
            }
          });
        }}
        onPointerOut={() => {
          const hoveredList = [...hovered];
          hoveredList[4] = false;
          setHovered(hoveredList);
        }}>
            <dodecahedronBufferGeometry attach="geometry" args={[1, 1]} />
            {activated ? (
              <meshBasicMaterial attach="material" color={realColors[color]} toneMapped={false} />
            ) : (
              <meshPhongMaterial attach="material" color={color} flatShading shininess={4} toneMapped={false} />
            )}
        </mesh>
  );
};

export default DodeUI;
