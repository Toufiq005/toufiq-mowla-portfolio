import './App.css'
import { useState, useEffect } from 'react'
import SideNavbar from './components/SideNavbar/SideNavbar'
import TopNavbar from './components/TopNavbar/TopNavbar'
import Home from './sections/Home/Home'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Experience from './sections/Experience/Experience'
import Contact from './sections/Contact/Contact'

function App() {

  const [brand, setBrand] = useState({});

  const brandColors = [
    {
      color:"text-brand-one",
      border:"border-brand-one",
      hover:"hover-brand-one",
      bg:"bg-brand-one",
      hex:"#0aff9d"
    },
    {
      color:"text-brand-two",
      border:"border-brand-two",
      hover:"hover-brand-two",
      bg:"bg-brand-two",
      hex:"#ee82ee"
    },
    {
      color:"text-brand-three",
      border:"border-brand-three",
      hover:"hover-brand-three",
      bg:"bg-brand-three",
      hex:"#00ffff"
    },
    {
      color:"text-brand-four",
      border:"border-brand-four",
      hover:"hover-brand-four",
      bg:"bg-brand-four",
      hex:"#ffff00"
    }
  ]
  
  const brandIndex = Math.floor(Math.random() * brandColors.length);

  useEffect(() => {
    setBrand(brandColors[brandIndex]);
  },[])

  return (
    <>
      <TopNavbar brand={brand}/>
      <SideNavbar brand={brand}/>
      <Home brand={brand}/>
      <About brand={brand}/>
      <Projects brand={brand}/>
      <Experience brand={brand}/>
      <Contact brand={brand}/>
    </>
  )
}

export default App
