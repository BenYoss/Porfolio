import { useEffect, useState } from 'react';

export default function Contact() {
  const [, setReload] = useState();

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.background = 'rgb(238 76 24)';
    setReload([]);
  }, []);
  return (
          <div>
              <h2 className="about">This is the Contact page</h2>
          </div>
  );
}
