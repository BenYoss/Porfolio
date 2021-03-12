/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact({ transClick, setTransClick }) {
  const [, setReload] = useState();

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.background = '#caf1f0';
    setReload([]);
  }, []);
  return (
        <div className="contact-container">
            <div className="nav-bar-about">
              <Navbar type="navbar-contact" transClick={transClick} setTransClick={setTransClick} />
            </div>
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
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL" />
            </div>
            <div class="app-form-group message">
              <textarea class="app-form-control" placeholder="MESSAGE" />
            </div>
            <div class="app-form-group buttons">
              <button type="reset" class="app-form-button">CANCEL</button>
              <button type="submit" class="app-form-button">SEND</button>
            </div>
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
