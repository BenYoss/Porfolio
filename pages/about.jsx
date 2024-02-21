/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

function changeBackground() {
  if (window.innerWidth < 800) {
    document.body.style.overflowY = 'scroll';
    document.body.style.overflowX = 'hidden';
  }
else {  document.body.style.overflowY = 'hidden';
  document.body.style.overflowX = 'hidden';}
  document.getElementsByTagName('html')[0].style.background = '#f7b93e';
}

export default function About({ transClick, setTransClick }) {
  const [mobile, isMobile] = useState(false);

  useEffect(() => {
    changeBackground();
    if (window.innerWidth < window.innerHeight) {
      isMobile(true);
    }
  }, []);

  return (
      <div className="about-container mobile">
        {
          mobile ? (
            <div>
              <motion.div transition={{ duration: 0.5 }} variants={{ hidden: { y: -100 }, visible: { y: 1 } }} initial="hidden" animate="visible" className="nav-bar-about mobile">
                <Navbar style="navbar-contact" type="nav-bar-about mobile" transClick={transClick} setTransClick={setTransClick} />
              </motion.div>
              <div className="about-me-header mobile">
                <h2>Hey! I'm Ben!</h2>
              </div>
              <div className="about-body">
                <div className="about-me-image mobile">
                </div>
                <div className="about-me-layer mobile">
                </div>
                <div className="about-description mobile">
                <span className="about-description-text">
                  I'm a software developer/designer based in New Orleans who loves to build things, fix things, and bring things to life!</span>
                  <span className="about-description-text">
                      Currently, I am a junior at <b>Tulane University</b> majoring in <b>Information Technology</b> and concentrating in <b>Application Development</b>.
                      I am passionate about programming since I had graduated with 3 IBCs from the immersion bootcamp program, <b>Operation Spark</b>,
                      which changed my life. Now I build projects for fun and make a difference in people's lives with technology.
                      In the future, I aim to pursue <b>Machine Learning</b> and <b>Data Science</b>.
                      Transitioning from my work to being a hobbyist, I
                      am a free-lance digital artist/animator, and like to play table tennis, home cook, explore nature, and read.
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <motion.div transition={{ duration: 0.5 }} variants={{ hidden: { y: -100 }, visible: { y: 1 } }} initial="hidden" animate="visible" className="nav-bar-about">
                <Navbar style="nav-bar-about" transClick={transClick} setTransClick={setTransClick} />
              </motion.div>
            <div className="about-me-header">
              <h2>Hey! I'm Ben!</h2>
            </div>
            <div className="about-body">
              <div className="about-me-image">
              </div>
              <div className="about-me-layer">
              </div>
              <div className="about-description">
                  <span className="about-description-text">
                  I'm a software developer/designer based in New Orleans who loves to build things, fix things, and bring things to life!</span>
                  <span className="about-description-text">
                      Currently, I am a junior at <b>Tulane University</b> majoring in <b>Information Technology</b> and concentrating in <b>Application Development</b>.
                      I am passionate about programming since I had graduated with 3 IBCs from the immersion bootcamp program, <b>Operation Spark</b>,
                      which changed my life. Now I build projects for fun and make a difference in people's lives with technology.
                      In the future, I aim to pursue <b>Machine Learning</b> and <b>Data Science</b>.
                      Transitioning from my work to being a hobbyist, I
                      am a free-lance digital artist/animator, and like to play table tennis, home cook, explore nature, and read.
                  </span>
              </div>
            </div>
            </div>
          )
        }
      </div>
  );
}
