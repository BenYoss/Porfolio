/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import skills from '../components/tech.info.json';
import Navbar from '../components/Navbar';

export default function Skills({ transClick, setTransClick }) {
  const [, setReload] = useState();
  const [mobile, isMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < window.innerHeight) {
      isMobile(true);
    }
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
    language: {
      opacity: 1,
      width: '100%',
      // y: distance,
    },
    database: {
      opacity: 1,
      width: '100%',
      // y: distance * 3,
    },
    devops: {
      opacity: 1,
      width: '100%',
      // y: distance * 6,
    },
    scale: {
      scale: 0.8,
    },
  };

  return (
          <div className="projects-container">
            {
              mobile ? (
                <div>
                  <div className="nav-bar-about mobile">
              <Navbar type="navbar-contact" transClick={transClick} setTransClick={setTransClick} />
            </div>
            <div></div>
    <motion.div transition={{ duration: 1 }} variants={header} initial="hidden" animate="visible" className="skills-header mobile">
      <h1>My Skills</h1>
    </motion.div>
    <section id="section03" class="demo">
      <a><span></span>Scroll</a>
    </section>
    <motion.div variants={header} className="grid" animate="scale">
    <motion.div variants={header} initial="hidden" animate="language" className="skills-header lang">
      <motion.h1 className="hex-title">Programming Languages</motion.h1>
      <motion.ul className="hex-box" id="hexGrid">
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
            if (skill.category === 'Language') {
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
            }
            return '';
          })
        }
      </motion.ul>
    </motion.div>

    <motion.div variants={header} initial="hidden" animate="database" className="skills-header lang">
      <motion.h1 className="hex-title">Databases</motion.h1>
      <motion.ul className="hex-box" id="hexGrid">
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
            if (skill.category === 'DBMS') {
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
            }
            return '';
          })
        }
      </motion.ul>
    </motion.div>

    <motion.div variants={header} initial="hidden" animate="devops" className="skills-header lang">
      <motion.h1 className="hex-title">Dev-Ops</motion.h1>
      <motion.ul className="hex-box" id="hexGrid">
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
            if (skill.category === 'Dev-Ops') {
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
            }
            return '';
          })
        }
      </motion.ul>
    </motion.div>
    <motion.div variants={header} initial="hidden" animate="devops" className="skills-header lang">
      <motion.h1 className="hex-title">Client</motion.h1>
      <motion.ul className="hex-box" id="hexGrid">
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
            if (skill.category === 'Front-End') {
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
            }
            return '';
          })
        }
      </motion.ul>
    </motion.div>
    <motion.div variants={header} initial="hidden" animate="devops" className="skills-header lang">
      <motion.h1 className="hex-title">UI-Frameworks</motion.h1>
      <motion.ul className="hex-box" id="hexGrid">
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
            if (skill.category === 'UI-Framework') {
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
            }
            return '';
          })
        }
      </motion.ul>
    </motion.div>
    <motion.div variants={header} initial="hidden" animate="devops" className="skills-header lang">
      <motion.h1 className="hex-title">Server</motion.h1>
      <motion.ul className="hex-box" id="hexGrid">
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
            if (skill.category === 'Server') {
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
            }
            return '';
          })
        }
      </motion.ul>
    </motion.div>
      </motion.div>
                </div>
              ) : (
                <div>
                       <div className="nav-bar-about">
              <Navbar type="navbar-contact" transClick={transClick} setTransClick={setTransClick} />
            </div>
            <div></div>
    <motion.div variants={header} transition={{ duration: 1 }} initial="hidden" animate="visible" className="skills-header">
      <h1>My Skills</h1>
    </motion.div>
    <motion.div variants={header} className="grid" animate="scale">
    <motion.div variants={header} initial="hidden" animate="language" className="skills-header lang">
      <motion.h1 className="hex-title">Programming Languages</motion.h1>
      <motion.ul className="hex-box" id="hexGrid">
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
            if (skill.category === 'Language') {
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
            }
            return '';
          })
        }
      </motion.ul>
    </motion.div>

    <motion.div variants={header} initial="hidden" animate="database" className="skills-header lang">
      <motion.h1 className="hex-title">Databases</motion.h1>
      <motion.ul className="hex-box" id="hexGrid">
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
            if (skill.category === 'DBMS') {
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
            }
            return '';
          })
        }
      </motion.ul>
    </motion.div>

    <motion.div variants={header} initial="hidden" animate="devops" className="skills-header lang">
      <motion.h1 className="hex-title">Dev-Ops</motion.h1>
      <motion.ul className="hex-box" id="hexGrid">
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
            if (skill.category === 'Dev-Ops') {
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
            }
            return '';
          })
        }
      </motion.ul>
    </motion.div>
    <motion.div variants={header} initial="hidden" animate="devops" className="skills-header lang">
      <motion.h1 className="hex-title">Client</motion.h1>
      <motion.ul className="hex-box" id="hexGrid">
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
            if (skill.category === 'Front-End') {
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
            }
            return '';
          })
        }
      </motion.ul>
    </motion.div>
    <motion.div variants={header} initial="hidden" animate="devops" className="skills-header lang">
      <motion.h1 className="hex-title">UI-Frameworks</motion.h1>
      <motion.ul className="hex-box" id="hexGrid">
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
            if (skill.category === 'UI-Framework') {
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
            }
            return '';
          })
        }
      </motion.ul>
    </motion.div>
    <motion.div variants={header} initial="hidden" animate="devops" className="skills-header lang">
      <motion.h1 className="hex-title">Server</motion.h1>
      <motion.ul className="hex-box" id="hexGrid">
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
            if (skill.category === 'Server') {
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
            }
            return '';
          })
        }
      </motion.ul>
    </motion.div>
      </motion.div>
                </div>
              )
            }
          </div>
  );
}
