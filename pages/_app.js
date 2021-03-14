import '../styles/styles.scss';
import '../styles/projects.scss';
import '../styles/contact.scss';
import '../styles/skills.scss';
import '../styles/icons.scss';
import { useState, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import pageVariants from '../components/animations/variants';

function MyApp({ Component, pageProps }) {
  const [transitionClick, setTransitionClick] = useState(false);
  const [mobile, isMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < window.innerHeight) {
      isMobile(true);
    }
  }, [mobile]);
  if (transitionClick) {
    document.getElementsByClassName('transition')['background-color'] = document.getElementsByTagName('html')[0].style.background;
    setTimeout(() => {
      setTransitionClick(!transitionClick);
    }, 2000);
  }
  return (
  <>
    <Component {...pageProps}
    transClick={transitionClick}
    setTransClick={setTransitionClick} />
  </>
  );
}

export default MyApp;
