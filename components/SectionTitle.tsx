import React from 'react'

interface Props{
    title:string
}

const SectionTitle = ({title}: Props) => {
  return (
    <h2 className='font-titleFont text-3xl font-bold flex items-center'>
        {title}
    </h2>
  )
}

export default SectionTitle