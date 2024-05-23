'use client'
import React from 'react'
import Image from 'next/image'
import { FaLinkedinIn,FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'





const Contact = () => {




  return (
    <div id='contact' className='w-full  h-screen'>
        <div className='max-w-[1240px] m-auto px-2 w-full'>
            <p className='text-gray-600 uppercase font-semibold'>Contact</p>
            <h2 className='font-semibold text-3xl my-3'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8 justify-center'>
             {/* left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src="/contact.jpg" width={600} height={500} alt="hii" />

                <div>
                <h2 className='font-semibold text-xl my-3'>Sirisha</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>I am available for freelance or full-time positions. Contact me and lets&apos;s talk.</p>
            </div>
            <div>
            <div className='uppercase pt-8'>
                <p>Connect With Me</p>
                <div className='flex items-center justify-between py-'>
                <div className='flex text-start items-center  my-4 w-full sm:w-[80%] space-x-4'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105'>
                      <a href="https://www.linkedin.com/in/shirisha-siri-4b75a2236?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bgj%2F1dZNRQWOSrEZ8Cblw3w%3D%3D"><FaLinkedinIn /></a>
                      </div>
                     <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105'>
                     <a href="https://github.com/Siri29-09"><FaGithub /></a>
                     </div>
                     <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105'>
                       <AiOutlineMail />
                     </div>
                     
                </div>
                </div>
            </div>
        </div>
            </div>
           {/* right */}

        <div className='col-span-3 w-full h-auto shadow-xl rounded-xl shadow-gray-400 lg:p-4'>
            <div className='p-4'>





           <form action='https://formspree.io/f/mqkroqbe' method='POST'>

            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='relative flex flex-col'>
                    <lable htmlFor='name' className='uppercase text-sm py-2'>Name</lable>
                    <input id='name' name='name' className='border-2 rounded-lg p-3 flex border-gray-300' type='text' 
                    required/> 
                </div>
                <div className='flex flex-col'>
                    <lable htmlFor='mobile' className='uppercase text-sm py-2'>Mobile Number</lable>
                    <input id='mobile' className='border-2 rounded-lg p-3 flex border-gray-300' type='text' /> 
                </div>
            </div>

            <div className='relative flex flex-col py-2'>
            <lable htmlFor='email' className='uppercase text-sm py-2'>E-Mail</lable>
            <input id='email'  name='name' className='border-2 rounded-lg p-3 flex border-gray-300' type='email' 
            required/> 
            </div>

            <div className='relative flex flex-col py-2'>
            <lable htmlFor='subject' className='uppercase text-sm py-2'>Subject</lable>
            <input id='subject'  name='name' className='border-2 rounded-lg p-3 flex border-gray-300' type='text' required/> 
            </div>

            <div className='relative flex flex-col py-2'>
            <lable htmlFor='message' className='uppercase text-sm py-2'>Messages</lable>
              <textarea id='message'  name='name' className='border-2 rounded-lg p-3 border-gray-300 ' rows='10' required/>
            </div>
            <button className='w-full mt-3 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105'>Send Message</button>
           </form>

            </div>
            </div>           
        </div>
       <div className='flex justify-center py-12'>
       <a href='/'>
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105'>
        <HiOutlineChevronDoubleUp className='text-gray-600' size={25}/>
        </div>
       </a>

       </div>
      </div>
    </div>
  )
}

export default Contact
