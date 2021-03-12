/* eslint-disable no-use-before-define */
import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
    type: string,
    transClick: boolean,
    setTransClick: Function,
}

const Navbar: React.FC<Props> = ({ type, transClick, setTransClick }) => (
        <div className="navbar-container">
            <div className="navbar-cluster">
              <a className="arrow left">
              </a>
              <Link href="/">
                  <motion.span
                  animate="in"
                  whileHover={{ scale: 1.1, textShadow: '-2px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff' }}
                  whileTap={{ scale: 0.9 }}
                  className={type || 'navbar-home'}
                  onClick={() => {
                    setTransClick(!transClick);
                  }}>
                      Back to Home
                  </motion.span>
              </Link>
            </div>
        </div>
);

export default Navbar;
