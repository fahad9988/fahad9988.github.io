import React from 'react';
import {BsLinkedin,BsGithub} from "react-icons/bs"
import {MdEmail} from "react-icons/md"

const SocialMedia = () => {
  return (
    <div className='app__social'>
<div>
  <a href="mailto:fahad20830@gmail.com"> <MdEmail/></a>
</div>
<div>
 <a target="_blank" href="https://www.linkedin.com/in/fahad-arif-9975b0239"><BsLinkedin/></a>
</div>
<div>
 <a target="_blank" href="https://github.com/fahad9988"><BsGithub/></a>
</div>
    </div>
  )
}

export default SocialMedia