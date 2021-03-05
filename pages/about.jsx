// import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Image from 'next/image';
// import img from '../components/resources/image0.jpg';

export default function About() {
  const [, setReload] = useState();

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.background = '#f7b93e';
    setReload([]);
    console.log(document.getElementsByTagName('html')[0].style.background);
  }, []);

  return (
      <div className="about-container">
        <div className="nav-bar-about">
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
            {/* <h4>
              <span>
              random random random random random
              random random random random random
              randomrandomrandomrandomrandom
              randomrandomrandomrandomrandom
              randomrandomrandomrandomrandom
              randomrandomrandomrandomrandom
              randomrandomrandomrandomrandom
              randomrandomrandomrandomrandom
              randomrandomrandomrandomrandom
              randomrandomrandomrandomrandom
              </span>
            </h4> */}
          </div>
          {/* <Footer /> */}
        </div>
      </div>
  );
}
