import React from 'react';
import "./About.scss";
import { images } from '../../constants';
import { AppWrap,MotionWrap } from '../../wrapper';

const About = () => {
  return (
    <div className='main' id="about" >
      <h1 className='head' id='about.about.section'>About Me</h1>
      <div className='app__about' >
        <div className='image' >
          <img className='my-image home-img' src={images.Fahad} alt="Profile-Image" />
        </div>
        <div className='text' >
          <h1>Hi 👋,</h1>
          <h1>I'm Fahad Arif</h1>
         <p id='user-detail-intro' className='my-story' >
          An enthusiastic and hardworking Full Stack Web Developer skilled in MERN Stack and proficient in Data Structures and Algorithms. Passionate about implementing and launching new projects and has the ability to collaborate well in Team Projects. Capable of writing production-ready code using HTML, CSS, JavaScript, ReactJS, Redux on the Front-End to build single page applications. 
         </p>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(About,"app__about"),"about","app__whitebg");