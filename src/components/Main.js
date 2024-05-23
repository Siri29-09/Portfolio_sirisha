import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import {AiOutlineClone, AiOutlineMenu} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'


 

const Main = () => {
  return (
    <div id='home' className='w-full  text-center'>

    <div className='max-w-[1240px] w-full h-screen mx-auto p-2 flex justify-center'>
        <div className='flex justify-between items-center'>
            <div className='text-start'>
              <p className='font-bold text-3xl  mb-4 '>Front-End <br /> Developer</p>
            <p className='text-base lg:text-lg font-semibold text-gray-700'>Hi, I&apos;m Sirisha Pulidindi.A passionate <br /> Front-End Developer based in Hyderabad, India.</p>
           <div className='flex text-start items-center  my-4 w-full sm:w-[80%] space-x-4'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105'>
                        <a href="https://www.linkedin.com/in/shirisha-siri-4b75a2236?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bgj%2F1dZNRQWOSrEZ8Cblw3w%3D%3D"><FaLinkedinIn /></a>
                       
                      </div>
                     <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105'>
                      <a href="https://github.com/Siri29-09"><FaGithub /></a>
                       
                     </div>
                </div>
            </div>

            <div>
            <Image
              src="/profile.jpg" 
              alt="Description of the image"
              width={400} 
              height={300}         
            />
                 
                 
            </div>
           
        </div>

       
        </div>         


    </div>
  )
}

export default Main
