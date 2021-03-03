/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';

const Index = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState();

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div className="splash-container" width={windowWidth} height={windowHeight}>
        <div className="container-header">
            <h3 className="header-title">{'W E L C O M E'}</h3>
        </div>
        <div className="header-divider">
        </div>
        <div className="container-body">
            <div className="three-env">
                <h2>This will be the 3D enviornment</h2>
            </div>
        </div>
    </div>
  );
};

export default Index;
