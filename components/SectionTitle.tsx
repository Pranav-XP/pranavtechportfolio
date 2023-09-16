import React from 'react'
import {motion} from 'framer-motion'

interface Props{
    title:string
}

const SectionTitle = ({title}: Props) => {
  return (
    <motion.h2
    initial={{y:10,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.5,delay:0.9}}
     className='font-titleFont text-3xl font-bold flex items-center'>
        {title}
    </motion.h2>
  )
}

export default SectionTitle