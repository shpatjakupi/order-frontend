import React from 'react'
import Herobanner from 'components/hero/Herobanner';
import { FaSquarePhone } from "react-icons/fa6";
import Footer from 'components/footers/Footer';
import About from 'components/About';
import { FcGoogle } from "react-icons/fc";

const Home = () => {

  const phoneNumber = '21907404';

  return (
    <div>
      <About />
      <a className='cursor-pointer	' href={`tel:${phoneNumber}`}>
        <FaSquarePhone className='fixed cursor-pointer text-4xl lg:bottom-12 bottom-20 right-3 text-green-600 rounded-md' />
      </a>

      <div className='fixed lg:bottom-12 bottom-20 left-3 flex items-center justify-center mb-1 md:mb-0'>
        <FcGoogle className='mr-1 text-md' />
        <p className=''> 4.5 </p>
      </div>

      <Footer domain="Ordrupspizza" position="absolute" />
    </div>

    
  )
}

export default Home