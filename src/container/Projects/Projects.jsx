import React from 'react';
import "./Projects.scss";
import {motion} from "framer-motion";
import images from '../../constants/images';
import { AppWrap,MotionWrap } from '../../wrapper';

const projects=[
  {
  image:images.Trendy,
  title:"Trendy Mart",
  desc:"This is the clone of Bloomingdale's website, an e-commerce website which deals with the sales of variety of products like jewellery, clothing, shoes etc.",
  tech:"HTML, CSS, JavaScript, React, Redux, Chakra-UI, NodeJS, ExpressJS, MongoDB",
  git:"https://github.com/UMAR44641/TrendyMart",
  deploy:"https://trendy-mart.vercel.app/"
},
  {
    image:images.Fashion,
    title:"Fashionista",
    desc:"This is the clone of Snapdeal website, an e-commerce website which deals with the sales of various products like clothing products, electronics etc.",
    tech:"HTML, CSS, JavaScript, React, React-Redux, Chakra UI",
    git:"https://github.com/fahad9988/warm-afternoon-3310",
    deploy:"https://darling-mooncake-57603b.netlify.app/"
  },
  {
  image:images.AirGarage,
  title:"Air Garage Clone",
  desc:"This is the clone of AirGarage website which is a full service parking operator. It helps us book parking slots across various places around the United States.",
  tech:"HTML, CSS, JavaScript",
  git:"https://github.com/fahad9988/naughty-wind-121",
  deploy:"https://air-garage-clone.netlify.app/"
},
{
  image:images.LoseIt,
  title:"Lose It Clone",
  desc:"This is the clone of LoseIt! website which is a weight Loss website created with the goal of helping members reach a healthy weight by providing them with the tools such as daily calorie budget counter .",
  tech:"React, JS, ChakraUI, SwiperJS",
  git:"https://github.com/fahad9988/plum-leg-9420",
  deploy:"https://aliveapp.netlify.app/"
}
]

const Projects = () => {
  return (
    <div id="projects" >
<h1 className='Project-Head' >Projects</h1>
<div className='fahad_projects'>
  {projects.map((item)=>{
    return <motion.div
    whileInView={{opacity:1}}
    whileHover={{scale:1.05}}
    transition={{duration:0.5}}
    className="fahad_single_project project-card"
    key={item.title}
    >
    <img src={item.image} alt={item.title} />
    <h2 class="project-title">{item.title}</h2>
    <p className="fahad_project_desc project-description" >{item.desc}</p>
    <p className="fahad_tech-stack project-tech-stack">Tech Stack: {item.tech}</p>
    <div className='project-btn' >
      <a className='project-github-link' target="_blank" href={item.git}>
        <button>Github</button>
      </a>
      <a className='project-deployed-link' target="_blank" href={item.deploy}>
        <button>Live Site</button>
      </a>
    </div>
    </motion.div>
  })}

</div>
    </div>
  )
}

export default AppWrap(MotionWrap(Projects,'app__works'),"projects",'app__whitebg')