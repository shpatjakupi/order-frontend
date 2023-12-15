import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import { FaSquarePhone } from "react-icons/fa6";
import {Tooltip, Button} from "@nextui-org/react";
import { FaClock } from "react-icons/fa";

const About = (props) => {
  return (

    <div className='textCenter text-center my-20 text-black'>

        <p className='text-md lg:text-xl text-[#fcda9a]'>Discover</p>
        <h1 className='text-6xl lg:text-8xl'>{props.title}</h1>

        <div className='knife my-4 flex items-center justify-center'>
            <GiKnifeFork className='text-6xl text-[#fcda9a]' />
        </div>

        <div className='openingHours bg-opacity-80  p-4 backdrop-blur-sm rounded-md w-fit m-auto relative'>
            <p className='mb-2 text-lg font-semibold border-b pb-1'>OPENING HOURS</p>

            <div className='flex items-center'>
            <FaClock className='mr-1' />
                <p>Monday - Friday: <span className=' text-teal-500'>14.00 - 22.00</span></p>
            </div>

            <div className='flex items-center justify-center'>
                <FaClock className='mr-1' />
                <p>Weekend: <span className=' text-teal-500'>11.00 - 23.00</span></p>
            </div>

        </div>

    </div>
  )
}

export default About