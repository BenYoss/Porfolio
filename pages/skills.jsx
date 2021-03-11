import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import skills from '../components/tech.info.json';

export default function Skills() {
  const [, setReload] = useState();

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.background = '#f168f5';
    setReload([]);
  }, []);

  const header = {
    hidden: {
      opacity: 0,
      width: 0,
    },
    visible: {
      opacity: 1,
      width: '100%',
    },
  };

  return (
          <div className="projects-container">
    <motion.div variants={header} initial="hidden" animate="visible" className="skills-header">
      <h1>My Skills</h1>
    </motion.div>
    <motion.div className="grid">
    <motion.ul id="hexGrid">
      {
        skills.map((skill, i) => {
          const item = {
            hidden: {
              opacity: 0,
              transition: { duration: 100 },
              height: 0,
            },
            visible: {
              opacity: 1,
              height: 215,
              transition: { duration: i / 10 },
              scale: 0.8,
            },
          };
          return (
            <motion.li className="hex" whileHover={{ scale: 1.1 }} key={i} variants={item} initial="hidden" animate="visible">
              <div className="hexIn">
                <a className="hexLink">
                  <div className="img">
                    <img className="img" src={skill.image} alt="hex-icon" />
                  </div>
                  <h1 id="demo1">{skill.name}</h1>
                </a>
              </div>
            </motion.li>
          );
        })
      }
    </motion.ul>
      </motion.div>
          </div>
  );
}
