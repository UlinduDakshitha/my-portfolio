import React from 'react'
import './App.css'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CVSection from './components/Cvsection'
import Blog from './components/Blog'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <>
      <ThemeToggle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CVSection />
      <Blog />
      <Contact />
    </>
  )
}

export default App
