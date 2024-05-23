

import React from 'react';
import ProjectTitle from './ProjectTitle';


const Project = () => {
  return (
    <div>
    <div id='project' className='w-full my-11'>
        <div className='max-w-[1240px] mx-auto pu-16'>
          <p className='text-gray-600 uppercase font-semibold'>projects</p>
          <h2 className='font-semibold text-3xl my-3'>What I&apos;ve Built</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <ProjectTitle 
            name='apple.png'
            web='Apple website'
            projectDemo='https://siri29-09.github.io/apple-clone/apple.html' 
            projectUrl='https://github.com/Siri29-09/apple-clone'
            /> 
            

             <ProjectTitle
            name='dior.png'
            web='Dior website'
            projectDemo='https://siri29-09.github.io/Dior-fashion-site/dior.html'
            projectUrl='https://github.com/Siri29-09/Dior-fashion-site'
              />

             <ProjectTitle
            name='nike.png' 
            web='Nike website'
            projectDemo='https://siri29-09.github.io/Nike-site/nike.html'
            projectUrl='https://github.com/Siri29-09/Nike-site'/>

             <ProjectTitle
            name='food.png'
            web='Food website'
            projectDemo='https://siri29-09.github.io/Food-website/food.html'
            projectUrl='https://github.com/Siri29-09/Food-website'
             />        
         
       </div>
      </div>  
    </div>
  </div>
  )
}

export default Project
