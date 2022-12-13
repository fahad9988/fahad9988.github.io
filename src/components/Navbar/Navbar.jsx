import React from 'react';
import "./Navbar.scss";
import { images } from '../../constants';
import {HiMenuAlt4,HiX} from "react-icons/hi";
import {motion} from "framer-motion";

const Navbar = () => {
const [toggle, setToggle] = React.useState(false)
  return (
    <nav className='app__navbar' >
      <div className='app__navbar-logo' >
        <a href="#Home"><span>Fahad Arif</span></a>
      </div>
      <ul className='app__navbar-links' >
        {["Home","About","Skills","Projects","Contact"].map((item)=>(
        <li className='app__flex p-text' key={`link-${item}`}>
          <div/>
          <a href={`#${item}`}>{item}</a>
        </li>
        ))}
      </ul>
      <a href="../../../public/download/resume.pdf" download ><button className='app__nav-btn'>Resume</button></a>
      <div className='app__navbar-menu' >
<HiMenuAlt4 onClick={()=>{setToggle(true)}} />

{
  toggle && (
      <motion.div 
      whileInView={{x:[260,0]}}
      transition={{duration:0.85,ease:"easeOut"}}
      >
<HiX onClick={()=>{setToggle(false)}} />
<ul>
{["Home","About","Skills","Projects","Contact"].map((item)=>(
        
        <li  key={item}>
          <a onClick={()=>{setToggle(false)}} href={`#${item}`}>{item}</a>
        </li>
      
        ))}  </ul>
      </motion.div>
  )
}
      </div>
    </nav>
  )
}

export default Navbar