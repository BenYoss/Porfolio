/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [, setReload] = useState();
  useEffect(() => {
    document.getElementsByTagName('html')[0].style.background = '#f5f6f6';
    setReload([]);
  }, []);
  return (
    <div className="about-container">
    <div className="nav-bar-about">
      <Navbar />
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
      {/* <Footer /> */}
    </div>
  </div>
  );
}
