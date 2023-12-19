import React from 'react'
import Herobanner from 'components/hero/Herobanner';
import { FaSquarePhone } from "react-icons/fa6";
import Footer from 'components/footers/Footer';
import About from 'components/About';
import { FcGoogle } from "react-icons/fc";

const Home = () => {
  return (
    <div>

      <Herobanner />
      <About />
      <FaSquarePhone className='fixed text-4xl lg:bottom-12 bottom-20 right-3 text-blue-400 rounded-md' />

      <div className='fixed lg:bottom-12 bottom-20 left-3 flex items-center justify-center mb-1 md:mb-0'>
        <FcGoogle className='mr-1 text-md' />
        <p className=''> 4.5 </p>
      </div>

    </div>

    
  )
}

export default Home