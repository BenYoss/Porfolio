/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import Splash3D from '../components/3D.env/3DSplash';

const Index = () => {
  const [threeEnv, setThreeEnv] = useState();

  useEffect(() => {
    setTimeout(() => {
      setThreeEnv(<div className="three-env">
                <Splash3D className="canvo" />
            </div>);
    }, 1400);
  }, []);

  return (
    <div className="splash-container">
      <a href="/about">click me</a>
        <div className="container-header">
            <h3 className="header-title"><span>BENJAMIN </span><span className="last-name"> YOSS</span></h3>
        </div>
        <div className="header-divider">
        </div>
        <div className="container-body">
          {threeEnv}
        </div>
    </div>
  );
};

export default Index;
