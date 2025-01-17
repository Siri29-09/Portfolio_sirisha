'use client';
import React, { useEffect, useState } from 'react'

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    
    const[isClick,setClick] = useState(false);
    
   
    const toggleNav =() =>{
        setClick(!isClick)
    }

  return (
    <div>
       
        <nav className='fixed w-full z-50'>
           
           <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>


              <div className='flex items-center justify-between sm:px-6 lg:px-8 h-16'>
                   <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                    <Image
                      src="/s_logo.png" 
                      alt="Description of the image"
                      width={46} 
                      height={46}         
                    />
                
                 </div>
                 </div>
                  <div className='hidden md:block'>
                    <div className='ml-4 flex items-center space-x-4'>
                        <Link href='/#home' className='hover:text-gray-500 hover:underline font-semibold'>Home</Link>
                        <Link href='/#about' className='hover:text-gray-500 hover:underline font-semibold'>About</Link>
                        <Link href='/#skill' className='hover:text-gray-500 hover:underline font-semibold'>Skills</Link>
                        <Link href='/#project' className='hover:text-gray-500 hover:underline font-semibold'>Projects</Link>
                        <Link href='/#contact' className='hover:text-gray-500 hover:underline font-semibold'>Contact</Link>         
                    </div>
                  </div>
                   <div className='md:hidden flex items-center'>
                    <button className='inline-flex items-center justify-center p-2 hover:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black' onClick={toggleNav}>
                        {isClick ?(
                            <svg  className="h-6 w-6"

                            xmlns="http://www.w3.org/2000/svg"
          
                            fill="none"
          
                            viewBox="0 0 24 24"
          
                            stroke="currentColor" >
          
                            <path
          
                              strokeLinecap="round"
          
                              strokeLinejoin="round"
          
                              strokeWidth={2}
          
                              d="M6 18L18 6M6 6l12 12"/>
                            </svg>
          
                        ) :(
                            <svg  className="h-6 w-6"

                            xmlns="http://www.w3.org/2000/svg"
          
                            fill="none"
          
                            viewBox="0 0 24 24"
          
                            stroke="currentColor">
          
                            <path
          
                              strokeLinecap="round"
          
                              strokeLinejoin="round"
          
                              strokeWidth={2}
          
                              d="M4 6h16M4 12h16m-7 6h7"/>
          
                            </svg>
                        )}
                    </button>
                    </div>
            
              </div>
           </div>

           {isClick &&(
            <div className='md:hidden'>
                <div className=' px-2 pb-3 space-y-1 sm:px-3 text-center'>
                  <Link href='/#home'  className='hover:text-gray-500 hover:underline'>Home</Link>
                    <Link href='/#about' className='hover:text-gray-500 hover:underline block'>About</Link>
                    <Link href='/#skill' className='hover:text-gray-500 hover:underline block'>Skills</Link>
                      <Link href='/#project' className='hover:text-gray-500 hover:underline block'>Projects</Link>
                        <Link href='/#contact'className='hover:text-gray-500 hover:underline block'>Contact</Link> 
                 
                </div>
            </div>
           )}
   </nav>

    </div>

  )
}

export default Navbar
