/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

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
                      What I love to do is explore the world of possibility,
                      and never hesitate on an idea. I prefer working in
                      collaboration rather than isolation, and I enjoy impacting
                      the lives of others and bringing ideas to life!
                      Transitioning from my work to being a hobbyist, I
                      am a free-lance digital artist/animator, a technical writer,
                      a philosopher, a culinary scientist, and a graphic designer.
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
                      What I love to do is explore the world of possibility,
                      and never hesitate on an idea. I prefer working in
                      collaboration rather than isolation, and I enjoy impacting
                      the lives of others and bringing ideas to life!
                      Transitioning to being a hobbyist, I
                      am a free-lance digital artist/animator, a technical writer,
                      a philosopher, a culinary scientist, and a graphic designer.
                  </span>
              </div>
            </div>
            </div>
          )
        }
      </div>
  );
}
