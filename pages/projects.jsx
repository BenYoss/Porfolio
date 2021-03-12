/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import projectInfo from '../components/project.info.json';

export default function Contact({ transClick, setTransClick }) {
  const [, setReload] = useState();
  const [clicks, setClicks] = useState([false, false, false, false]);
  const images = ['Quasibound.png', 'Barkpoint.png', 'Languine.png', 'Harbinger.png'];
  const colors = ['#579dce', '#2f4f4f', '#343a40', '#ff6e3f'];
  const onExtended = (index) => {
    const clickList = [...clicks];
    clickList[index] = !clickList[index];
    setClicks(clickList);

    if (clickList[index]) {
      document.getElementById(`extended-${index}`).style.width = '55vw';
      document.getElementById(`extended-${index}`).style.backgroundColor = colors[index];
      document.getElementById(`extended-${index}`).style.animation = 'extended-tween ease-out 0.5s';
      document.getElementsByClassName('extended-unit').background = 'blue';
    } else {
      document.getElementById(`extended-${index}`).style.width = '0vw';
      document.getElementById(`extended-${index}`).style.animation = 'extended-tweenr ease-out 0.5s';
    }
  };
  useEffect(() => {
    document.getElementsByTagName('html')[0].style.background = '#f5f6f6';
    setReload([]);
  }, []);
  return (
    <div className="experience-container">
        <div className="nav-bar-about">
          <Navbar type={'navbar-projects'} transClick={transClick} setTransClick={setTransClick} />
        </div>
         <div className="experience-header">
            <span>Previous Projects</span>
         </div>
    <ul className="experience-gui">
    {projectInfo.map((click, index) => {
      const tech = projectInfo[index]['tech-used'].split(',');
      return (
        <li className="experience-block" key={index}>
            <span className="experience-title">{projectInfo[index].title}</span>
            <img className="experience-img" src={images[index]} onClick={
              () => { onExtended(index); }
            } />
            <div id={`extended-${index}`} className="extended" key={index}>
              <h2 className="extended-desc">{projectInfo[index].title}</h2>
              <div className="extended-desc">
                <span className="extend-span">{projectInfo[index]['contrib-1']}</span>
                <span>{' '}</span>
                <br />
                <span className="extend-span">{projectInfo[index]['contrib-2']}</span>
                <span>{' '}</span>
                <br />
                <span className="extend-span">{projectInfo[index]['contrib-3']}</span>
                <span>{' '}</span>
                <br />
                <span className="extend-span">{projectInfo[index]['contrib-4']}</span>
                <span>{' '}</span>
              </div>
              <div className="extended-tech">
                {tech.map((technology, i) => (
                    <span className="extended-unit" key={i}>{technology}</span>
                ))}
              </div>
            </div>
        </li>
      );
    })}
    </ul>
  </div>
  );
}
