import { useEffect, useState } from 'react';

export default function Contact() {
  const [, setReload] = useState();

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.background = '#caf1f0';
    setReload([]);
  }, []);
  return (
        <div>
            <h2 className="about">This is the Contact page</h2>
        </div>
  );
}
