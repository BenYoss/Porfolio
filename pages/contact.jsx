/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact({ transClick, setTransClick }) {
  const [, setReload] = useState();
  const [, setEmail] = useState('');
  const [mobile, isMobile] = useState(false);

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.background = '#caf1f0';
    if (window.innerWidth < window.innerHeight) {
      isMobile(true);
    }
    setReload([]);
  }, []);
  return (
        <div className="contact-container">
          {mobile ? (
              <div className="contact-container">
              <div className="nav-bar-about mobile">
                <Navbar type="navbar-contact" transClick={transClick} setTransClick={setTransClick} />
              </div>
          </div>
          ) : (
            <div className="contact-container">
            <div className="nav-bar-about">
              <Navbar type="navbar-contact" transClick={transClick} setTransClick={setTransClick} />
            </div>
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
