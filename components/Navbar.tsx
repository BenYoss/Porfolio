/* eslint-disable no-use-before-define */
import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
    type: string,
    transClick: boolean,
    setTransClick: Function,
}

const Navbar: React.FC<Props> = ({ type, transClick, setTransClick }) => {
  const [mobile, isMobile] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth < window.innerHeight) {
      isMobile(true);
    }
  }, [mobile]);
  return (
        <div className="navbar-container">
          { mobile ? (
            <div className="navbar-cluster">
              {/* <a className="arrow left">
              </a> */}
              <Link href="/">
                <motion.div
                 animate={{ opacity: 1, scale: 1 }}
                 whileHover={{ scale: 1.03, textShadow: '-2px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff' }}
                 whileTap={{ scale: 0.9 }}
                 >
                  <motion.span
                  className={type || 'navbar-home'}
                  onClick={() => {
                    setTransClick(!transClick);
                  }}>
                      Back to Home
                  </motion.span>
                </motion.div>
              </Link>
            </div>
          ) : (
            <div className="navbar-cluster">
            {/* <a className="arrow left">
            </a> */}
            <Link href="/">
              <motion.div
               animate={{ opacity: 1, scale: 1 }}
               whileHover={{ scale: 1.03, textShadow: '-2px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff' }}
               whileTap={{ scale: 0.9 }}
               >
                <motion.span
                className={type || 'navbar-home'}
                onClick={() => {
                  setTransClick(!transClick);
                }}>
                    Back to Home
                </motion.span>
              </motion.div>
            </Link>
          </div>
          ) }
        </div>
  );
};

export default Navbar;
