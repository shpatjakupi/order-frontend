import React from 'react'
import { FiClock } from "react-icons/fi";
import { VscSmiley } from "react-icons/vsc";
import { FaCircleInfo } from "react-icons/fa6";

const About = (props) => {
  return (

    <div className='textCenter text-black bg-white'>

        <div className='flex justify-start gap-5 items-center border-b py-4 px-5'>
            <div className='flex items-center'>
                <VscSmiley className='mr-1 text-md' />
                <p className=''> 8.6 </p>
            </div>
            <div className='flex items-center'>
                <FiClock className='mr-1 text-md' />
                <p> Åbent indtil 22.00</p>
            </div>
            <div className='flex items-center'>
                <FaCircleInfo className='mr-1 text-md text-[#009ddf]' />
                <p className='text-[#009ddf]'>Se mere information</p>
            </div>
        </div>

    </div>
  )
}

export default About