/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable operator-linebreak */
/* eslint-disable no-trailing-spaces */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import projectInfo from '../components/project.info.json';

export default dynamic(() => Promise.resolve(function Contact({ transClick, setTransClick }) {
  const [clicks, setClicks] = useState([false, false, false, false]);
  const [mobile, isMobile] = useState(false);
  const images = ['Barkpoint.png', 'Languine.png', 'Quasibound.png', 'Ciphrase.png'];
  const colors = ['#2f4f4f', '#343a40', '#579dce', '#1e5419'];
  const onExtended = (index) => {
    const clickList = [...clicks];
    clickList[index] = !clickList[index];
    setClicks(clickList);

    if (clickList[index]) {
      document.getElementById(`extended-${index}`).style.width = '55vw';
      document.getElementById(`extended-${index}`).style.backgroundColor = colors[index];
      document.getElementById(`extended-${index}`).style.animation = 'extended-tween ease-out 0.5s';
      document.getElementsByClassName('extended-unit').background = 'blue';
    } else {
      document.getElementById(`extended-${index}`).style.width = '0vw';
      document.getElementById(`extended-${index}`).style.animation = 'extended-tweenr ease-out 0.5s';
    }
  };
  const onExtendedMobile = (index) => {
    const clickList = [...clicks];
    clickList[index] = !clickList[index];
    setClicks(clickList);

    if (clickList[index]) {
      document.getElementById(`extended-${index}`).style.height = '120vw';
      document.getElementById(`extended-${index}`).style.backgroundColor = colors[index];
      document.getElementById(`extended-${index}`).style.animation = 'extended-tween-mobile ease-out 0.5s';
      document.getElementsByClassName('extended-unit').background = 'blue';
    } else {
      document.getElementById(`extended-${index}`).style.height = '0vw';
      document.getElementById(`extended-${index}`).style.animation = 'extended-tweenr-mobile ease-out 0.5s';
    }
  };
  useEffect(() => {
    if (window.innerWidth < 800) {
      document.body.style.overflowY = 'scroll';
      document.body.style.overflowX = 'hidden';
    }
  else {  document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';}
    document.getElementsByTagName('html')[0].style.background = '#f5f6f6';
    if (window.innerWidth < window.innerHeight) {
      isMobile(true);
    }
  }, []);
  const header = {
    hidden: {
      opacity: 0,
      width: 0,
    },
    visible: {
      opacity: 1,
      width: '100%',
      duration: 3,
    },
    scale: {
      scale: 0.8,
    },
  };
  return (
    <div className="experience-container">
          {mobile ? (
            <div>
              <div className="contact-container">
              <motion.div transition={{ duration: 0.5 }} variants={{ hidden: { y: -100 }, visible: { y: 1 } }} initial="hidden" animate="visible" className="nav-bar-about mobile">
                <Navbar style="navbar-contact" type="navbar-contact mobile" transClick={transClick} setTransClick={setTransClick} />
              </motion.div>
          </div>
          <motion.div variants={header} transition={{ duration: 1 }} initial="hidden" animate="visible" className="experience-header mobile">
            <span>Projects</span>
            <motion.span variants={header} transition={{ duration: 1, delay: 2 }} initial="hidden" animate="visible" className="experience-instr mobile"> - Hover and Click</motion.span>
         </motion.div>
    <ul className="experience mobile">
    {projectInfo.map((click, index) => {
      const tech = projectInfo[index]['tech-used'].split(',');
      return (
        <li className={`experience-block mobile test-${index}`} key={index}>
            <span className="experience-title">{projectInfo[index].title}</span>
            <img className="experience-img mobile" src={images[index]} onClick={
              () => { onExtendedMobile(index); }
            } />
            <div id={`extended-${index}`} className={`extended mobile test-${index}`} key={index}>
              <ul><h2 className="extended-desc mobile">{projectInfo[index].title}</h2></ul>
              <ul className="extended-desc mobile">
                <span className="extended-span mobile">{`Overview: ${projectInfo[index].overview}`}</span>
              </ul>
              <ul className="extended-desc mobile">
                {projectInfo[index]['contrib-1']
                 && 
                <p className="extend-span">{projectInfo[index]['contrib-1']}
                </p>}
                {projectInfo[index]['contrib-2']
                && 
                <p className="extend-span">{projectInfo[index]['contrib-2']}
                </p>}
                {projectInfo[index]['contrib-3']
                && 
                <p className="extend-span">{projectInfo[index]['contrib-3']}
                </p>}
                {projectInfo[index]['contrib-4']
                && 
                <p className="extend-span">{projectInfo[index]['contrib-4']}
                </p>}
              </ul>
              <div className="extended-tech mobile">
                {tech.map((technology, i) => (
                    <span className="extended-unit" key={i}>{technology}</span>
                ))}
              </div>
            </div>
        </li>
      );
    })}
    </ul>
          </div>
          ) : (
            <div>
            <div className="contact-container">
            <motion.div transition={{ duration: 0.5 }} variants={{ hidden: { y: -100 }, visible: { y: 1 } }} initial="hidden" animate="visible" className="nav-bar-about">
                <Navbar style="navbar-contact" type="navbar-contact" transClick={transClick} setTransClick={setTransClick} />
            </motion.div>
            </div>
            <motion.div transition={{ duration: 1 }} variants={header} initial="hidden" animate="visible" className="experience-header">
            <span>Projects</span>
            <motion.span variants={header} transition={{ duration: 1, delay: 2 }} initial="hidden" animate="visible" className="experience-instr"> - Hover and Click</motion.span>
         </motion.div>
    <ul className="experience-gui">
    {projectInfo.map((click, index) => {
      const tech = projectInfo[index]['tech-used'].split(',');
      return (
        <li className="experience-block" key={index}>
            <span className="experience-title">{projectInfo[index].title}</span>
            <img className="experience-img" src={images[index]} onClick={
              () => { onExtended(index); }
            } />
            <div id={`extended-${index}`} className="extended" key={index}>
              <h2 className="extended-desc title">{projectInfo[index].title}</h2>
              <div className="extended-desc">
                <span className="extended-span">{`Overview: ${projectInfo[index].overview}`}</span>
              </div>
              <ul className="extended-desc">
                {projectInfo[index]['contrib-1'] && 
                <li className="extend-span">{projectInfo[index]['contrib-1']}
                </li>}
                {projectInfo[index]['contrib-2'] && 
                <li className="extend-span">{projectInfo[index]['contrib-2']}
                </li>}
                {projectInfo[index]['contrib-3'] && 
                <li className="extend-span">{projectInfo[index]['contrib-3']}
                </li>}
                {projectInfo[index]['contrib-4'] && 
                <li className="extend-span">{projectInfo[index]['contrib-4']}
                </li>}
              </ul>
              <div className="extended-tech">
                {tech.map((technology, i) => (
                    <span className="extended-unit" key={i}>{technology}</span>
                ))}
              </div>
            </div>
        </li>
      );
    })}
    </ul>
            </div>
          )}
  </div>
  );
}), { ssr: false });
