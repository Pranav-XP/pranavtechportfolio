import Image from "next/image";
import React from 'react'
import { logo, profileImg } from '@/public/assets/images'
import Link from "next/link";
import { motion } from "framer-motion" 

const Navbar = () => {
  return (
    <div className='bg-navbarColor w-full shadow-navbarShadow h-20 sticky top-0 z-50  px-4'>
        <div className=' max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
                <a href="#home"><Image className="w-12 hover:scale-110 duration-300" 
                src={logo} alt="logo"/></a>
            </motion.div>
            <div className="hidden lg:flex lg:items-center lg:gap-7">
                <ul className="flex gap-7">
                <Link href="#home"
                className="flex items-center -gap-1 font-bold text-textLight
                hover:-translate-y-1 cursor-pointer duration-300 nav-link">
                <motion.li
                initial={{y:-20,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:0.1}}>Home</motion.li>
                </Link>

                <Link href="#tools"
                className="flex items-center -gap-1 font-bold text-textLight
                hover:-translate-y-1 cursor-pointer duration-300 nav-link">
                <motion.li
                initial={{y:-20,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:0.3,delay:0.1}}>Tools</motion.li>
                </Link>

                <Link href="#home"
                className="flex items-center -gap-1 font-bold text-textLight
                hover:-translate-y-1 cursor-pointer duration-300 nav-link">
                <motion.li
                initial={{y:-20,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:0.5,delay:0.4}}>Projects Coming Soon</motion.li>
                </Link>   
                </ul>
                {/* <a href="#">
                <motion.button
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.5}}
                className="px-4 py-2 rounded-md text-textLight border border-textLight font-black
                hover:bg-textLight hover:text-bodyColor duration-300">
                    Resume
                </motion.button>
                </a> */}
            </div>
            {/*Small Icon*/}
            <div className="w-6 h-5 flex flex-col justify-between items-center lg:hidden text-4xl 
            text-textLight cursor-pointer overflow-hidden group">
                <span className="w-full h-[2px] bg-textLight inline-flex transform 
                group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
                <span className="w-full h-[2px] bg-textLight inline-flex transform 
                group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>
                <span className="w-full h-[2px] bg-textLight inline-flex transform 
                group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>

            </div>
        </div>
    </div>
  )
}

export default Navbar