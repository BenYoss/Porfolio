/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import pageVariants from '../components/animations/variants';
import Splash3D from '../components/3D.env/3DSplash';

const Index = () => {
  const [threeEnv, setThreeEnv] = useState();
  const [dodeHover, setDodeHover] = useState(false);
  const [mobile, isMobile] = useState(false);
  const [clicked, setClicked] = useState([false, false, false, false]);
  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth < window.innerHeight) {
      isMobile(true);
    }
    if (!document.getElementsByTagName('html')[0].style.background.includes('gradient')) {
      document.getElementsByTagName('html')[0].style.background = `radial-gradient(${document.getElementsByTagName('html')[0].style.background} 4%, #000000 96%)`;
    }
  }, []);

  useEffect(() => {
    if (mobile) {
      setTimeout(() => {
        setThreeEnv(<div className="three-env">
            <a href="about">
              <motion.div className="mobile-btn about" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ opacity: 1, scale: 1.1, filter: 'brightness(80%)' }} whileTap={{ scale: 0.9 }}>
                <h3 className="text-button">About</h3>
              </motion.div>
            </a>
            <a href="projects">
              <motion.div className="mobile-btn projects" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.1, filter: 'brightness(80%)' }} whileTap={{ scale: 0.9 }}>
                <h3 className="text-button projects">Projects</h3>
              </motion.div>
            </a>
            <a href="contact">
              <motion.div className="mobile-btn contact" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.1, filter: 'brightness(80%)' }} whileTap={{ scale: 0.9 }}>
                <h3 className="text-button">Contact</h3>
              </motion.div>
            </a>
            <a href="skills">
              <motion.div className="mobile-btn skills" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.1, filter: 'brightness(80%)' }} whileTap={{ scale: 0.9 }}>
                <h3 className="text-button">Skills</h3>
              </motion.div>
            </a>
        </div>);
      }, 1400);
    } else {
      setTimeout(() => {
        setThreeEnv(<div className="three-env">
                  <Splash3D className="canvo" dodeHover={dodeHover} setDodeHover={setDodeHover} router={router} clicked={clicked} setClicked={setClicked} />
              </div>);
      }, 1400);
    }
  }, [dodeHover, mobile]);

  return (
    <motion.div className="splash-container" variants={pageVariants} initial="initial"
    animate="in"
    exit="out">
      {
        mobile ? (
          <div>
            <div className="container-header mobile">
              <h3 className="header-title mobile"><span>Benjamin </span><span className="last-name mobile"> Yoss</span></h3>
              <div className="guidance header-title mobile">
              </div>
              <motion.div className=" mobile icon">
                <div>
                <a href="https://github.com/BenYoss">
                    <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="icon-unit"
                    src="/icons/githubicon.png"
                    alt="resumeicon"
                    width="18%"
                    height="80%" />
                  </a>
                  <a href="https://drive.google.com/file/d/1GmxNqRy9gKLLy9p_u9w-51qRGiJ2cW8C/view?usp=sharing">
                    <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="icon-unit"
                    src="/icons/resumeicon.png"
                    alt="resumeicon"
                    width="18%"
                    height="80%" />
                  </a>
                  <a href="https://benyoss4.medium.com/">
                    <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="icon-unit"
                    src="/icons/mediumicon.png"
                    alt="resumeicon"
                    width="18%"
                    height="80%" />
                  </a>
                  <a href="https://www.linkedin.com/in/benjaminyoss/">
                    <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="icon-unit"
                    src="/icons/linkedinicon.png"
                    alt="resumeicon"
                    width="18%"
                    height="80%" />
                  </a>
                </div>
                <div>
                </div>
              </motion.div>
            </div>
            <div className="container-body">
              {threeEnv}
            </div>
          </div>
        ) : (
          <div>
                <div className="container-header">
                <div>
                <table>
                  <tr>
                    <td>
                      <img src="BenYossProfile2.png" alt="benyossprofile" className="profile-picture"></img>
                    </td>
                    <td>
                      <h3 className="header-title"><span>Benjamin </span><span className="last-name"> Yoss</span></h3>
                    </td>
                  </tr>
                </table>
                </div>
                <div className="guidance header-title">
                  <img src="drag.png" alt="drag" width="20%" height="20%" />
                </div>
                <div id="icon" className="icon">
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
          </div>
        )
      }
    </motion.div>
  );
};

export default Index;
