import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Projects from './sections/Projects/Projects'
import Contacts from './sections/Contacts/Contacts'
import Hero from './sections/Hero/Hero'
import "../style.css"
function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <Projects/>
     <Contacts/>
     <footer>
      Made by Sabrina Ly
     </footer>
    </>
  )
}

export default App
