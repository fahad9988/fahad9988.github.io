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
    <div id="Home" className='app__header app__flex'  >
      
     <motion.div  
     className='app__header-info' 
     whileInView={{x:[-100,0],opacity:[0,1]}}
     transition={{duration:0.75}}
     >
<div className='app__header-badge' >
<div className='badge-cmp ' >
<div style={{marginLeft:20}}>
  <p className='head-text hello-hi'  >Hello 👋</p>
  <h3 className='new' >I'm Fahad Arif,</h3>
  <h3 className='new' >A Full Stack Web Developer & a Problem Solver. Looking forward towards new challenges.</h3>
</div>
</div>

<a href="https://drive.google.com/uc?export=download&id=1F8rF5bGcV3oyXt6L5wcu-LvRDn3bNXPG" onClick={()=>{window.open('https://drive.google.com/file/d/1F8rF5bGcV3oyXt6L5wcu-LvRDn3bNXPG/view?usp=sharing')}} ><button className='app__header-btn'>My Resume</button>
</a>

</div>
     </motion.div>

     <motion.div 
     variant={scaleVariants}
     whileInView={scaleVariants.whileInView}
     className="app__header-circles"
     >
    <img src={images.white} alt="gif" />
     </motion.div>

    </div>
  )
}

export default AppWrap(Header,"Home")