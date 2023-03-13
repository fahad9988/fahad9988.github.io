import React,{useState} from 'react';
import {images} from "../../constants";
import {AppWrap,MotionWrap} from "../../wrapper";
import "./Footer.scss";


const Footer = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:""
  });
  const [formSubmit, setFormSubmit] = useState(false);
  const [loading, setLoading] = useState(false);


  const {name,email,message}= formData;

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
  }

const handleSubmit=()=>{
  if(formData.name==""||formData.email==""||formData.message==""){
    alert("Please Fill all the Input Fields.");
    return;
  }
  setLoading(true);
 fetch("https://fahad-portfolio-json-server-1.onrender.com/contacts",{
  method:"POST",
  body:JSON.stringify(formData),
  headers:{
   "Content-Type":"application/json"
  }
 }).then((res)=>{
  return res.json()
 }).then((res)=>{
  console.log(res)
  setLoading(false);
  setFormSubmit(true)
 })
}

  return (
    <div id="contact">
      <h1 className='Footer-Head' >Contact Me</h1>
      <div className="app__footer-cards">

        <div className="app__footer-card">
          <a href="mailto:fahad20830@gmail.com"><img className='mail-img' src={images.mail} alt="email" /></a>
          <a id="contact-email" href="mailto:fahad20830@gmail.com" className='p-text' >fahad20830@gmail.com</a>
        </div>
        
        <div className="app__footer-card">
          <a href="tel:+91 6389052323" ><img src={images.phone} alt="mobile" /></a> 
          <a id="contact-phone" href="tel:+91 6389052323" className='p-text' >+91 6389052323</a>
        </div>

        <div className="app__footer-card">
          <a id="contact-github" target="_blank" href="https://github.com/fahad9988"><img className='github-img' src={images.gitHub} alt="gitHub" /></a>
          <a href="https://github.com/fahad9988" target="_blank" className='p-text' >Github</a>
        </div>

        <div className="app__footer-card">
        <a id="contact-linkedin" target="_blank" href="https://www.linkedin.com/in/fahad-arif-9975b0239/"><img  src={images.linkedin} alt="linkedin" /></a>
          <a href="https://www.linkedin.com/in/fahad-arif-9975b0239/" target="_blank" className='p-text' >Linkedin</a>
        </div>

      </div>

      {!formSubmit?<div className="app__footer-form app__flex">
        <div className='app__flex' >
          <input type="text" className='p-text' name='name' placeholder='Your Name' value={name} onChange={handleChange} />
          </div>
        <div className='app__flex' >
          <input type="email" className='p-text' name='email' placeholder='Your Email' value={email} onChange={handleChange} />
          </div>
        <div>
          <textarea 
          className='p-text'
          placeholder='Your Message'
          value={message}
          name="message"
          onChange={handleChange}
          />
          </div>  
       <button type='button' className='p-text' onClick={handleSubmit} >
        {loading?"Sending":"Send Message"}
       </button>
      </div>:<div>
        <h3 className='head-text'>Thank You for getting in touch!</h3>
        </div>
        }

    </div>
  )
}

export default AppWrap(MotionWrap(Footer,"app__footer"),"contact","app__primarybg")