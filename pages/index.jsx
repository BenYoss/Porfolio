/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import pageVariants from '../components/animations/variants';
import Splash3D from '../components/3D.env/3DSplash';

const Index = () => {
  const [threeEnv, setThreeEnv] = useState();
  const [clicked, setClicked] = useState([false, false, false, false]);
  const router = useRouter();

  useEffect(() => {
    if (!document.getElementsByTagName('html')[0].style.background.includes('gradient')) {
      document.getElementsByTagName('html')[0].style.background = `radial-gradient(${document.getElementsByTagName('html')[0].style.background} 4%, #000000 96%)`;
    }
    setTimeout(() => {
      setThreeEnv(<div className="three-env">
                <Splash3D className="canvo" router={router} clicked={clicked} setClicked={setClicked} />
            </div>);
    }, 1400);
  }, []);

  return (
    <motion.div className="splash-container" variants={pageVariants} initial="initial"
    animate="in"
    exit="out">
        <div className="container-header">
            <h3 className="header-title"><span>Benjamin </span><span className="last-name"> Yoss</span></h3>
            <div className="guidance header-title">
              <img src="drag.png" alt="drag" width="20%" height="20%" />
            </div>
            <div className="icon">
              <a href="https://drive.google.com/file/d/1GmxNqRy9gKLLy9p_u9w-51qRGiJ2cW8C/view?usp=sharing">
                <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="icon-unit"
                src="/icons/resumeicon.png"
                alt="resumeicon"
                width="80%"
                height="80%" />
              </a>
              <a href="https://github.com/BenYoss">
                <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="icon-unit"
                src="/icons/githubicon.png"
                alt="resumeicon"
                width="80%"
                height="80%" />
              </a>
              <a href="https://benyoss4.medium.com/">
                <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="icon-unit"
                src="/icons/mediumicon.png"
                alt="resumeicon"
                width="80%"
                height="80%" />
              </a>
              <a href="https://www.linkedin.com/in/benjaminyoss/">
                <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="icon-unit"
                src="/icons/linkedinicon.png"
                alt="resumeicon"
                width="80%"
                height="80%" />

              </a>
            </div>
            <div className="header-icons">
            </div>
        </div>
        <div className="header-divider">
        </div>
        <div className="container-body">
          {threeEnv}
        </div>
    </motion.div>
  );
};

export default Index;
