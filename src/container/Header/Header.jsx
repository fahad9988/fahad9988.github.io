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
    <div id="home" className='fahad_header app__flex'  >
      
     <motion.div  
     className='fahad_header_intro' 
     whileInView={{x:[-100,0],opacity:[0,1]}}
     transition={{duration:0.75}}
     >
     <div className='fahad_header_box' >

     <div className='badge-cmp' >
      <div >
      <p className='head-text hello-hi'  >Hello 👋</p>
      <h3 className='new' id="user-detail-name" >I'm Fahad Arif,</h3>
      <h3 className='new' id="user-detail-intro">A Full Stack Web Developer & an intuitive Problem Solver. Looking forward towards new challenges.</h3>
      </div>
     </div>

     <a id="resume-link-2" href="https://drive.google.com/uc?export=download&id=1F8rF5bGcV3oyXt6L5wcu-LvRDn3bNXPG" onClick={()=>{window.open('https://drive.google.com/file/d/1F8rF5bGcV3oyXt6L5wcu-LvRDn3bNXPG/view?usp=sharing')}} ><button className='fahad_header_button' id="resume-button-2">My Resume</button>
     </a>

     </div>
     </motion.div>

     <motion.div 
     variant={scaleVariants}
     whileInView={scaleVariants.whileInView}
     className="fahad_header_greet"
     >
     <img src={images.white} alt="gif" />
     </motion.div>

    </div>
  )
}

export default AppWrap(Header,"home")