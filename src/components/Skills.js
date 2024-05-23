import Image from 'next/image'
import React from 'react'


const Skills = () => {
  return (
    <div id='skills'>
    <div className='w-full lg:h-screen p-2'>
      <div className=' max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className='text-gray-600 uppercase font-semibold'> 
          Skills
          </p>  
          <h2 className='font-semibold text-3xl my-3'>What I can Do</h2>      
                 
          <div className='grid md:grid-cols-2 lg:grid-cols-4 space-x-6 space-y-6'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-between items-center'>
                  <div className='m-auto'>
                  <Image
                      src="/html.png" 
                      alt="Description of the image"
                      width={43} 
                      height={43}         
                    />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                        </div>  
                </div>
            </div>

             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-between items-center'>
                  <div className='m-auto'>
                  <Image
                      src="/CSS.png" 
                      alt="Description of the image"
                      width={43} 
                      height={43}         
                    />

                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                        </div>  
                </div>
            </div>

             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-between items-center'>
                  <div className='m-auto'>
                  <Image
                      src="/js.png" 
                      alt="Description of the image"
                      width={43} 
                      height={43}         
                    />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Java Script</h3>
                        </div>  
                </div>
            </div>

             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-between items-center'>
                  <div className='m-auto'>
                  <Image
                      src="/React.webp" 
                      alt="Description of the image"
                      width={46} 
                      height={46}         
                    />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>React JS</h3>
                        </div>  
                </div>
            </div>

             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-between items-center'>
                  <div className='m-auto'>
                  <Image
                      src="/bootstrap.png" 
                      alt="Description of the image"
                      width={55} 
                      height={55}         
                    />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Boostrap</h3>
                        </div>  
                </div>
            </div>

             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-between items-center'>
                  <div className='m-auto'>
                  <Image
                      src="/tailwind.webp" 
                      alt="Description of the image"
                      width={46} 
                      height={46}         
                    />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Tailwind CSS</h3>
                        </div>  
                </div>
            </div>

             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-between items-center'>
                  <div className='m-auto'>
                  <Image
                      src="/git.png" 
                      alt="Description of the image"
                      width={46} 
                      height={46}         
                    />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Github</h3>
                        </div>  
                </div>
            </div>

             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-between items-center'>
                  <div className='m-auto'>
                  <Image
                      src="/figma.png" 
                      alt="Description of the image"
                      width={46} 
                      height={46}         
                    />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Figma</h3>
                        </div>  
                </div>
            </div>                                    

            </div>        
   
         </div>
    </div>
    </div>
  )
}

export default Skills
