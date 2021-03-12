/* eslint-disable no-use-before-define */
import * as React from 'react';
import Link from 'next/link';

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
                  <span className={type || 'navbar-home'} onClick={() => {
                    setTransClick(!transClick);
                  }}>
                      Back to Home
                  </span>
              </Link>
            </div>
        </div>
);

export default Navbar;
