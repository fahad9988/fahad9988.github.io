import React from 'react';
import "./Projects.scss";
import {motion} from "framer-motion";
import images from '../../constants/images';
import { AppWrap,MotionWrap } from '../../wrapper';

const projects=[{
  image:images.AirGarage,
  title:"Air Garage Clone",
  desc:"This is the clone of AirGarage website which is a full service parking operator. It helps us book parking slots across various places around the United States. This is a collaborative Team Project built by a team of 5 members in 4 days.",
  tech:"HTML, CSS, JavaScript",
  git:"https://github.com/fahad9988/naughty-wind-121",
  deploy:"https://air-garage-clone.netlify.app/"
},
{
  image:images.LoseIt,
  title:"Lose It Clone",
  desc:"This is the clone of LoseIt! website which is a weight Loss website created with the goal of helping members reach a healthy weight by providing them with the tools such as daily calorie budget counter . This is an individual project completed in a span of 2 days.",
  tech:"React, JS, ChakraUI, SwiperJS",
  git:"https://github.com/fahad9988/plum-leg-9420",
  deploy:"https://aliveapp.netlify.app/"
},
{
  image:images.RelDigital,
  title:"Reliance Digital Clone",
  desc:"This is the clone of Reliance Digital website, an e-commerce website which deals with the sales of electronic products. This is an individual project completed in a span of 4 days.",
  tech:"HTML, CSS, JavaScript",
  git:"https://github.com/fahad9988/available-blood-5696",
  deploy:"https://fahad-web-101-construct-week-project.netlify.app/"
}]

const Projects = () => {
  return (
    <div id="Projects" >
<h1 className='Project-Head' >Projects</h1>
<div className='app__project'>
  {projects.map((item)=>{
    return <motion.div
    whileInView={{opacity:1}}
    whileHover={{scale:1.05}}
    transition={{duration:0.5}}
    className="app__project-item"
    key={item.title}
    >
    <img src={item.image} alt={item.title} />
    <h2>{item.title}</h2>
    <p className='app_desc' >{item.desc}</p>
    <p className='app_tech-stack'>Tech Stack: {item.tech}</p>
    <div className='project-btn' >
      <a target="_blank" href={item.git}><button>Github</button></a><a target="_blank" href={item.deploy}><button>Live Site</button></a>
    </div>
    </motion.div>
  })}

</div>
    </div>
  )
}

export default AppWrap(MotionWrap(Projects,'app__works'),"Projects",'app__whitebg')