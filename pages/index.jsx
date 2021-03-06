/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Splash3D from '../components/3D.env/3DSplash';

const Index = () => {
  const [threeEnv, setThreeEnv] = useState();
  const [clicked, setClicked] = useState([false, false, false, false]);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setThreeEnv(<div className="three-env">
                <Splash3D className="canvo" router={router} clicked={clicked} setClicked={setClicked} />
            </div>);
    }, 1400);
  }, []);

  return (
    <div className="splash-container">
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
