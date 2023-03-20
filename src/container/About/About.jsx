import React from 'react';
import "./About.scss";
import { images } from '../../constants';
import { AppWrap,MotionWrap } from '../../wrapper';

const About = () => {
  return (
    <div  id="about" class="about section" >
      <h1 className='About-Head'>About Me</h1>
      <div className='fahad_about' >
        <div className='image' >
          <img className='home-img' src={images.Fahad} alt="Profile-Image" />
        </div>
        <div className='text' >
          <h1>Hi 👋,</h1>
          <h1 id="user-detail-name">I'm Fahad Arif</h1>
          <p id="user-detail-intro">
          An enthusiastic and hardworking Full Stack Web Developer with hands on experience in building and maintaining MERN based web applications. Capable of writing production-ready code using HTML, CSS, JavaScript, ReactJS and Redux on the front-end side and NodeJS, ExpressJS and MongoDB on the back-end side. Looking forward to join a progressive and a challenging work environment. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(About,"fahad_about"),"about","app__whitebg");