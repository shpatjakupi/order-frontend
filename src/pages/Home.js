import React from 'react'
import Herobanner from 'components/hero/Herobanner';
import { FaSquarePhone } from "react-icons/fa6";
import Footer from 'components/footers/Footer';
import About from 'components/About';

const Home = () => {
  return (
    <div>

      <Herobanner />
      <About />
      <FaSquarePhone className='fixed text-4xl lg:bottom-12 bottom-20 right-3 text-blue-400 rounded-md' />

    </div>

    
  )
}

export default Home