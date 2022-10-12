import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
// import Heroimage from "../hero-img.png"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero className='hero overlay' />
    </div>
  )
}

export default Home