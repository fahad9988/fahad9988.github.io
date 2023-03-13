import React from 'react';
import {motion} from "framer-motion";
import {AppWrap,MotionWrap} from "../../wrapper";
import images from "../../constants/images";

import "./Skills.scss";
const skills=[
{name:"React",icon:images.react},
{name:"Redux",icon:images.redux},
{name:"TypeScript",icon:images.typescript},
{name:"NextJS",icon:images.NextJS},
{name:"HTML5",icon:images.html},
{name:"CSS3",icon:images.css},
{name:"JavaScript",icon:images.javascript},
{name:"Git",icon:images.git},
{name:"Github",icon:images.gitHub},
{name:"VS-Code",icon:images.vsCode},
{name:"NodeJS",icon:images.node},
{name:"ExpressJS",icon:images.expressJS},
{name:"MongoDB",icon:images.mongoDb},
]

const Skills = () => {
  return (
    <div id="skills" >
      <h1 className='Skill-Head' >Skills & Tools</h1>
      <div className='app__skills-container' >
        <motion.div className='app__skills-list'>
           {skills.map((skill)=>{
            return <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5}}
            className="app__skill-item app__flex skills-card"
            key={skill.name}
            >
              <div className="app__flex"  >
                <img class="skills-card-img" src={skill.icon} alt={skill.name} />
              </div>
              <p className='p-text skills-card-name' >{skill.name}</p>
            </motion.div>
           })}
        </motion.div>

      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Skills,'app__skills'),"skills",'app__primarybg')