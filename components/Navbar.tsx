/* eslint-disable no-use-before-define */
import * as React from 'react';
import Link from 'next/link';

type Props = {
}

const Navbar: React.FC<Props> = () => (
        <div className="navbar-container">
            <div className="navbar-cluster">
              <a className="arrow left">
              </a>
              <Link href="/">
                  <span className="navbar-home">
                      Back to Home
                  </span>
              </Link>
            </div>
        </div>
);

export default Navbar;
