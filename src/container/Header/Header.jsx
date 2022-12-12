import React from 'react';
import "./Header.scss";
import {motion} from "framer-motion";
import {images} from "../../constants";
import { AppWrap } from '../../wrapper';

const scaleVariants={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:"easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div id="Home" className='app__header app__flex' >
      
     <motion.div  
     className='app__header-info' 
     whileInView={{x:[-100,0],opacity:[0,1]}}
     transition={{duration:0.75}}
     >
<div className='app__header-badge' >
<div className='badge-cmp app__flex' >
<span>👋</span>
<div style={{marginLeft:20}}>
  <p className='p-text' >Hello, I am</p>
  <h1 className='head-text' >Fahad</h1>
</div>
</div>

<div className='tag-cmp app__flex' >
<p className='p-text-1' >Full Stack Web Developer</p>
<p className='p-text' >Programmer</p>
</div>

</div>
     </motion.div>

     <motion.div 
     className='app__header-img' 
     whileInView={{opacity:[0,1]}}
     transition={{duration:0.5,delayChildren:0.5}}
     >
<img src={images.robotic} alt="profile" />
<motion.img
className='overlay-circle' 
whileInView={{scale:[0,1]}}
transition={{duration:1,ease:"easeInOut"}}
src={images.circle}
alt="profile_circle"
/>
     </motion.div>

     <motion.div 
     variant={scaleVariants}
     whileInView={scaleVariants.whileInView}
     className="app__header-circles"
     >
{[images.react,images.redux,images.css].map((circle,index)=>{
  return <div className="circle-cmp app__flex" key={`circle-${index}`} >
    <img src={circle} alt="circle" />
  </div>
})}
     </motion.div>

    </div>
  )
}

export default AppWrap(Header,"Home")