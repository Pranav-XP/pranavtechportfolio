import React from 'react'
import {motion,inView} from 'framer-motion'
import{MdEmail} from 'react-icons/md'
import{VscGithubInverted} from "react-icons/vsc"
import {AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className='shadow-footerShadow w-full h-5 py-6 flex items-center justify-center gap-3'>
        <a href='https://github.com/Pranav-XP'>
        <motion.span
                 initial={{y:-50,opacity:0}}
                 animate={{y:0,opacity:1}}
                 transition={{duration:0.1}}>
                    <VscGithubInverted size={20}></VscGithubInverted>
                </motion.span>
        </a>

<a href='https://www.linkedin.com/in/pranav-chand-16777318b/'>
<motion.span 
                initial={{y:-50,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:0.2}}>
                    <AiFillLinkedin size={30}></AiFillLinkedin>
                </motion.span>
</a>
                
              <a href="mailto:pranavchand777@gmail.com">
              <motion.span
                 initial={{x:50,opacity:0}}
                 animate={{x:0,opacity:1}}
                 transition={{duration:0.1}}>
                    <MdEmail size={30}></MdEmail>
                </motion.span>
              </a>
                
    </footer>
  )
}

export default Footer