import { useEffect, useState } from 'react';

export default function Contact() {
  const [, setReload] = useState();

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.background = '#f168f5';
    setReload([]);
  }, []);
  return (
          <div className="projects-container">
              {/* <h2 className="about">This is the Contact page</h2> */}
              <div className="projects-3D">
                {/* <Projects3D /> */}
              </div>
              <div className="projects-header">
                <h4>My Projects</h4>
              </div>
              <div className="projects-body">
                <div className="projects-cluster">
                  <div className="projects-unit">
                  </div>
                </div>
              </div>
          </div>
  );
}
