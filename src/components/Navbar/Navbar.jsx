import React from 'react';
import "./Navbar.scss";
import {HiMenuAlt4,HiX} from "react-icons/hi";
import {motion} from "framer-motion";

const Navbar = () => {
const [toggle, setToggle] = React.useState(false)
  return (
    <nav className='app__navbar' id="nav-menu" >
      <div className='app__navbar-logo' >
        <a href="#home"><span>{"<Fahad/>"}</span></a>
      </div>
      <ul className='app__navbar-links' >
        {["Home","About","Skills","Projects","Contact"].map((item)=>(
        <li className='app__flex  p-text' key={`link-${item}`}>
          <div/>
          <a class={`nav-link ${item.toLowerCase()}`} href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
        ))}
      </ul>
      <a id="resume-link-1" class="nav-link resume" href="https://drive.google.com/uc?export=download&id=1F8rF5bGcV3oyXt6L5wcu-LvRDn3bNXPG" onClick={()=>{window.open('https://drive.google.com/file/d/1F8rF5bGcV3oyXt6L5wcu-LvRDn3bNXPG/view?usp=sharing')}}><button className='app__nav-btn'>Resume</button></a>
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