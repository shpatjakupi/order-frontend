import React from 'react'
import Herobanner from 'components/hero/Herobanner';
import Aboutsection from 'components/Aboutsection';
import { FaSquarePhone } from "react-icons/fa6";
import Footer from 'components/footers/Footer';
import About from 'components/About';

const Home = () => {
  return (
    <div>

      <Herobanner />
      <About title="Vanløse Pizza" />
      <FaSquarePhone className='fixed text-5xl lg:text-6xl bottom-3 right-3 text-[#fcda9a] rounded-md lg:rounded-xl' />

    </div>

    
  )
}

export default Home