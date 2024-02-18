/* eslint-disable no-use-before-define */
import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

type Props = {
    style: string,
    type: string,
    transClick: boolean,
    setTransClick: Function,
}

const Navbar: React.FC<Props> = ({
  style, type, transClick, setTransClick,
}) => {
  const [mobile, isMobile] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth < window.innerHeight) {
      isMobile(true);
    }
  }, [mobile]);
  return (
        <motion.div className="navbar-container">
          { mobile ? (
            <motion.div className="navbar-cluster">
              {/* <a className="arrow left">
              </a> */}
              <Link className={style} href="/">
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
            </motion.div>
          ) : (
            <motion.div className="navbar-cluster">
            <Link className={style} href="/" >
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
          </motion.div>
          ) }
        </motion.div>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
