/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
// import Image from 'next/image';
// import img from '../components/resources/image0.jpg';

export default function About({ transClick, setTransClick }) {
  const [, setReload] = useState();
  const [mobile, isMobile] = useState(false);

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.background = '#f7b93e';
    if (window.innerWidth < window.innerHeight) {
      isMobile(true);
    }
    setReload([]);
  }, []);

  return (
      <div className="about-container">
        {
          mobile ? (
            <div>
              <div className="nav-bar-about mobile">
                <Navbar transClick={transClick} setTransClick={setTransClick} />
              </div>
              <div className="about-me-header mobile">
                <h2>Hey! I'm Ben!</h2>
              </div>
              <div className="about-body">
                <div className="about-me-image mobile">
                </div>
                <div className="about-me-layer mobile">
                </div>
                <div className="about-description mobile">
                  <span>
                      I'm a software developer/designer based in New Orleans.
                      Tech has always been a passion of mine since highschool
                      and I enjoy <b>bringing ideas to life!</b>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="nav-bar-about">
              <Navbar transClick={transClick} setTransClick={setTransClick} />
            </div>
            <div className="about-me-header">
              <h2>Hey! I'm Ben!</h2>
            </div>
            <div className="about-body">
              <div className="about-me-image">
              </div>
              <div className="about-me-layer">
              </div>
              <div className="about-description">
                <span>
                    I'm a software developer/designer based in New Orleans.
                    Tech has always been a passion of mine since highschool
                    and I enjoy <b>bringing ideas to life!</b>
                </span>
              </div>
            </div>
            </div>
          )
        }
      </div>
  );
}
