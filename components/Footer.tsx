import React from 'react'
import {motion,inView} from 'framer-motion'
import{MdEmail} from 'react-icons/md'
import{VscGithubInverted} from "react-icons/vsc"
import {AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className='shadow-footerShadow w-full h-5 py-7 flex items-center justify-center gap-3'>
        <a href='https://github.com/Pranav-XP'>
            <span>
                <VscGithubInverted size={20}></VscGithubInverted>
            </span>
        </a>
        <a href='https://www.linkedin.com/in/pranav-chand-16777318b/'>
          <span>
            <AiFillLinkedin size={30}></AiFillLinkedin>
          </span>
        </a>
        <a href="mailto:pranavchand777@gmail.com">
          <span>
            <MdEmail size={30}></MdEmail>
          </span>
        </a>
    </footer>
  )
}

export default Footer