import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    
    <div id='about' className='w-full  p-2 flex items-center'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='text-gray-600 uppercase font-semibold'>About</p>
            <h1 className='font-semibold text-3xl my-3'>Who I Am</h1>
            <p className='text-sm '>Hi, I&apos;m Sirisha, a passionate and creative front-end developer based in Hyderabad. I specialize in creating responsive, user-friendly websites and applications using the latest web technologies.

            I have honed my skills in HTML, CSS, JavaScript, and various front-end frameworks. <br /> My interest in coding started in college, where I took a web development course that sparked my fascination with building interactive websites.
             I&apos;m constantly striving to improve my skills and stay up-to-date with the ever-evolving web development landscape. My goal is to become a full-stack developer and work on innovative projects that make a difference.
             </p>
        </div>
        <div className='col'>
      <Image
              src="/about.webp" 
              alt="Description of the image"
              width={800} 
              height={600}         
            />
      </div>
      </div>
      
    </div>
 
  )
}

export default About
