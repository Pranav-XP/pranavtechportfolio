import React from 'react'
import SectionTitle from './SectionTitle'
import {BiLogoJava,BiLogoSpringBoot,BiGitBranch} from "react-icons/bi"
import {TbBrandCpp,TbBrandNextjs} from "react-icons/tb"
import {SiMysql,SiVmware,SiTailwindcss} from "react-icons/si"
import{CgWebsite} from "react-icons/cg"


const Tools = () => {
  return (
    <section id="tools"
    className='px-10'>
      <SectionTitle title="Tools"></SectionTitle>
    <div className='flex flex-col gap-16 py-5'>
        <div className='w-full text-textLight font-medium flex flex-col gap-4'>
          Technologies I have experience with:
          <ul className='max-w-[450px] grid grid-cols-3 justify-between gap-4'>
            <li><span><BiLogoJava size={60}></BiLogoJava></span></li>
            <li><span><BiLogoSpringBoot size={40}></BiLogoSpringBoot></span>Springboot</li>
            <li><span><TbBrandCpp size={60}></TbBrandCpp></span></li>
            <li><span><SiMysql size={60}></SiMysql></span></li>
            <li><span><TbBrandNextjs size={40}></TbBrandNextjs></span>NextJS</li>
            <li><span><CgWebsite size={40}></CgWebsite></span>HTML-CSS</li>
            <li><span><BiGitBranch size={40}></BiGitBranch></span>Git</li>
            <li><span><SiVmware size={60}></SiVmware></span></li>
            <li><span><SiTailwindcss size={40}></SiTailwindcss></span>TailwindCSS</li>
          </ul>
        </div>
    </div>
    </section>
  )
}

export default Tools