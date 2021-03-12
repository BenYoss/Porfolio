/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Text } from 'troika-three-text';
import { extend } from 'react-three-fiber';
import { useState } from 'react';
import fonts from './fonts';

extend({ Text });

const text = ['About Me', 'Skills', 'Contact', 'Projects'];

const TextMesh = ({ position, index }) => {
  const [rotation] = useState([0, 0, 0, 0]);
  const opts = {
    font: 'Philosopher',
    fontSize: 0.8,
    color: '#99ccff',
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: 'justify',
    materialType: 'MeshPhongMaterial',
  };

  return (
    <text
    position={position}
    rotation={rotation}
    {...opts}
    text={text[index]}
    font={fonts[opts.font]}
    anchorX="center"
    anchorY="middle"
  >
    {opts.materialType === 'MeshPhongMaterial' ? (
      <meshPhongMaterial attach="material" color={opts.color} />
    ) : null}
  </text>
  );
};

export default TextMesh;
