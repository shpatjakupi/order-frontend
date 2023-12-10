import React from 'react'
import Herobanner from 'components/hero/Herobanner';
import Aboutsection from 'components/Aboutsection';
import { FaSquarePhone } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
    <Herobanner />
    <Aboutsection />
        <FaSquarePhone className='fixed text-5xl lg:text-6xl bottom-3 right-3 text-[#fcda9a] bg-black rounded-md lg:rounded-xl' />

    </div>
  )
}

export default Home