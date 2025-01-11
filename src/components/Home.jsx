import React from 'react'
import Projects from './header/Projects'
import Skills from './header/Skills'
import Contact from './header/Contact'
import Hero from './Hero'
function Home() {
  return (
    <div className='w-full h-full m-0 p-0'>
      <div>
        <Hero />
      </div>



      <div>
        <Projects />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  )
}

export default Home