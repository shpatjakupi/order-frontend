import React from 'react'
import Herobanner from 'components/hero/Herobanner';
import Aboutsection from 'components/Aboutsection';
import { FaSquarePhone } from "react-icons/fa6";

const Home = () => {
  return (
    <div>

    <Herobanner 
    title="Royal Plate"
    />

    <Aboutsection
    title="LOVE FOR FOOD"
    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    />

    <FaSquarePhone className='fixed text-5xl lg:text-6xl bottom-3 right-3 text-[#fcda9a] bg-black rounded-md lg:rounded-xl' />

    </div>
  )
}

export default Home