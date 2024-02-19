/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-arrow-callback */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import skills from '../components/tech.info.json';
import Navbar from '../components/Navbar';
export default dynamic(() => Promise.resolve(function Skills({ transClick, setTransClick }) {
  const [mobile, isMobile] = useState(false);
  
  useEffect(() => {
    document.body.style.overflow = 'scroll';
    document.body.style.overflowX = 'hidden';
    document.getElementsByTagName('html')[0].style.background = '#f168f5';
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
                 <motion.div transition={{ duration: 0.5 }} variants={{ hidden: { y: -100 }, visible: { y: 1 } }} initial="hidden" animate="visible" className="nav-bar-about mobile">
              <Navbar style="nav-bar-about" type="navbar-contact" transClick={transClick} setTransClick={setTransClick} />
            </motion.div>
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
                transition: { duration: i / 100 },
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
                transition: { duration: i / 100 },
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
    <motion.div variants={header} initial="hidden" animate="database" className="skills-header lang">
      <motion.h1 className="hex-title">Data Science</motion.h1>
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
                transition: { duration: i / 100 },
                scale: 0.8,
              },
            };
            if (skill.category === 'DataSci') {
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
                transition: { duration: i / 100 },
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
      <motion.h1 className="hex-title">Client Libraries/Frameworks</motion.h1>
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
                transition: { duration: i / 100 },
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
                transition: { duration: i / 100 },
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
                transition: { duration: i / 100 },
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
    <motion.div variants={header} initial="hidden" animate="devops" className="skills-header lang">
      <motion.h1 className="hex-title">Additional Technologies</motion.h1>
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
                transition: { duration: i / 100 },
                scale: 0.8,
              },
            };
            if (skill.category === 'AddTech') {
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
                <motion.div transition={{ duration: 0.5 }} variants={{ hidden: { y: -100 }, visible: { y: 1 } }} initial="hidden" animate="visible" className="nav-bar-about">
              <Navbar style="nav-bar-about" type="navbar-contact" transClick={transClick} setTransClick={setTransClick} />
            </motion.div>
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
                transition: { duration: i / 100 },
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
                transition: { duration: i / 100 },
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
    <motion.div variants={header} initial="hidden" animate="database" className="skills-header lang">
      <motion.h1 className="hex-title">Data Science</motion.h1>
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
                transition: { duration: i / 100 },
                scale: 0.8,
              },
            };
            if (skill.category === 'DataSci') {
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
                transition: { duration: i / 100 },
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
      <motion.h1 className="hex-title">Client Libraries & Frameworks</motion.h1>
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
                transition: { duration: i / 100 },
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
                transition: { duration: i / 100 },
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
                transition: { duration: i / 100 },
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
    <motion.div variants={header} initial="hidden" animate="devops" className="skills-header lang">
      <motion.h1 className="hex-title">Additional Technologies</motion.h1>
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
                transition: { duration: i / 100 },
                scale: 0.8,
              },
            };
            if (skill.category === 'AddTech') {
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
}), { ssr: false });
