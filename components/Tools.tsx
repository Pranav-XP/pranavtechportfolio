import React from 'react'
import SectionTitle from './SectionTitle'
import {BiLogoJava,BiLogoSpringBoot,BiGitBranch} from "react-icons/bi"
import {TbBrandCpp,TbBrandNextjs} from "react-icons/tb"
import {SiMysql,SiVmware,SiTailwindcss} from "react-icons/si"
import{CgWebsite} from "react-icons/cg"


const Tools = () => {
  return (
    <section id="Tools"><SectionTitle title="Tools"></SectionTitle>
    <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textLight font-medium flex flex-col gap-4'>
          Technologies I have experience with:
          <ul className='max-w-[450px] grid grid-cols-3 justify-between gap-4'>
            <li className='flex items-center'><span><BiLogoJava size={60}></BiLogoJava></span></li>
            <li className='flex items-center'><span><BiLogoSpringBoot size={40}></BiLogoSpringBoot></span></li>
            <li className='flex items-center'><span><TbBrandCpp size={60}></TbBrandCpp></span></li>
            <li className='flex items-center'><span><SiMysql size={60}></SiMysql></span></li>
            <li className='flex items-center'><span><TbBrandNextjs size={40}></TbBrandNextjs></span></li>
            <li className='flex items-center'><span><CgWebsite size={40}></CgWebsite></span></li>
            <li className='flex items-center'><span><BiGitBranch size={40}></BiGitBranch></span>Git</li>
            <li className='flex items-center'><span><SiVmware size={60}></SiVmware></span></li>
            <li className='flex items-center'><span><SiTailwindcss size={40}></SiTailwindcss></span>TailwindCSS</li>
          </ul>
        </div>
    </div>
    </section>
  )
}

export default Tools