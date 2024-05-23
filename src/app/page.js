
import React from 'react'
import Main from '@/components/Main';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Skill from './skill/page';
import Skills from '@/components/Skills';
import Project from '@/components/Project';
import Contact from '@/components/Contact';
export default function Home() {
  return (
  <>

<Main />
<About/>
<Skills />
<Project />
<Contact />
 
  </>
  );
}
