import React from 'react'
import Hero from "./components/landing/Hero"
import About from './components/landing/About'
import SkillsSection from './components/landing/Skills'

import ProjectsSection from './components/landing/ProjectSection'
import Contact from './components/landing/Contact'

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <Contact  />

    </div>
  )
}

export default page

