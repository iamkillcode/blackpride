import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Tracking from '../components/Tracking'

const Home = () => {
  return (
    <div className='bgimage'>
        <Navbar/>
        <Hero className='hero overlay' />
        <Tracking />
    </div>
  )
}

export default Home