import React from 'react'
import {motion} from "framer-motion"

const Banner = () => {
  return (
    <section id="home"
    className='max-w-contentContainer mx-auto py-10 
    mdl:py-24 flex flex-col gap-4
    lgl:gap-8 mdl:px-10 xl:px-4'>
        <motion.h3
        initial={{y:10,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.6}}
        className='text-3xl font-bold'>
            Bula, my name is
        </motion.h3>
        <motion.h1
        initial={{y:10,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.7}}
        className='font-titleFont font-black text-5xl'>
            Pranav Chand.
        </motion.h1>
        <motion.span
        initial={{y:10,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.8}}
        className='font-black text-2xl'
        >
            I create solutions, on the web.
        </motion.span>
    </section>
  )
}

export default Banner