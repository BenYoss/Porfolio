/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Contact({ transClick, setTransClick }) {
  const [, setEmail] = useState('');
  const [mobile, isMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';
    document.getElementsByTagName('html')[0].style.background = '#caf1f0';
    if (window.innerWidth < window.innerHeight) {
      isMobile(true);
    }
  }, []);
  return (
        <div className="contact-container">
          {mobile ? (
              <div className="contact-container">
            <motion.div transition={{ duration: 0.5 }} variants={{ hidden: { y: -100 }, visible: { y: 1 } }} initial="hidden" animate="visible" className="nav-bar-about mobile">
              <Navbar style="navbar-contact" type="navbar-contact" transClick={transClick} setTransClick={setTransClick} />
            </motion.div>
          </div>
          ) : (
            <div className="contact-container">
            <motion.div transition={{ duration: 0.5 }} variants={{ hidden: { y: -100 }, visible: { y: 1 } }} initial="hidden" animate="visible" className="nav-bar-about">
              <Navbar style="navbar-contact" type="navbar-contact" transClick={transClick} setTransClick={setTransClick} />
            </motion.div>
            </div>
          )}
        <div>
  <div class="container">
    <div class="screen">
      <div class="screen-header">
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>ME</span>
            <div class="app-contact"></div>
          </div>
        </div>
        <div class="screen-body-item">
          <form name="app-form" data-netlify="true" method="POST" class="app-form">
            <input type="hidden" name="form-name" value="app-form" />
            <p class="app-form-group">
              <label htmlFor="name" />
              <input name="name" id="name" type="text" class="app-form-control" placeholder="NAME" />
            </p>
            <p class="app-form-group">
              <label htmlFor="email" />
              <input name="email" id="email" type="text" class="app-form-control" placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)} />
            </p>
            <p class="app-form-group message">
              <label htmlFor="message" />
              <textarea name="message" id="message" type="text" class="app-form-control" placeholder="MESSAGE" />
            </p>
            <p class="app-form-group buttons">
              <button type="reset" class="app-form-button">CANCEL</button>
              <button type="submit" class="app-form-button">SEND</button>
            </p>
          </form>
        </div>
      </div>
    </div>
    <div class="credits">
    </div>
  </div>
</div>
        </div>
  );
}
