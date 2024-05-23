import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectTitle = (props) => {
    const name = props.name
    const web=props.web
    const projectDemo=props.projectDemo
    const projectUrl=props.projectUrl
  return (
    <div className='space-y-5'>
       <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradiant-to-r from-[#5651e5] to-[#9daef3dd]'>
            <img src={name} alt='/' width="250" height="250" className='rounded-xl group-hover:opacity-10'/>

            <div className='hidden group-hover:block absolute top-[30%] left-[0%] translate z-40 h-full w-full text-center'>
            <h2 className='font-semibold text-2xl '>{web}</h2>
            <p className='text-gray-600 uppercase font-semibold my-5'>HTML,CSS</p>
            <Link href={projectDemo} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 text-white bg-black' >Demo</Link>
            <Link href={projectUrl} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 text-white bg-black ms-5' >Code</Link>
         </div>
          </div>
        
    </div>
  )
}

export default ProjectTitle
