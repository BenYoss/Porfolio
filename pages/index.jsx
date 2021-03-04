/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import Splash3D from '../components/3D.env/3DSplash';
import CSSSplash3D from '../components/3D.env/CSS3DSplash';

const clickList = [false, false, false, false];

const Index = () => {
  const [threeEnv, setThreeEnv] = useState();
  const [windowEnv, setWindowEnv] = useState();
  const positionList = [[5, 5, 7], [5, 5, 8], [5, 5, 9], [5, 5, 10]];
  const colorList = ['#F0FFFF', '#00CED1', '#9400D3', '#FF8C00'];

  useEffect(() => {
    setTimeout(() => {
      setThreeEnv(<div className="three-env">
                <Splash3D className="canvo" />
            </div>);
    }, 1400);
    setTimeout(() => {
      setWindowEnv(<div className="three-env">
                <CSSSplash3D type="module" className="canvo" positions={positionList} clickList={clickList} colors={colorList} />
            </div>);
    }, 2300);
  }, []);

  return (
    <div className="splash-container">
        <div className="container-header">
            <h3 className="header-title">{'W E L C O M E'}</h3>
        </div>
        <div className="header-divider">
        </div>
        <div className="container-body">
          {threeEnv}
          {windowEnv}
        </div>
    </div>
  );
};

export default Index;
