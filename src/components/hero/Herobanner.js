import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import { FaSquarePhone } from "react-icons/fa6";
import {Tooltip, Button} from "@nextui-org/react";
import { FaClock } from "react-icons/fa";

const url = 'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Herobanner = (props) => {

  return (
    <>

        <div className='h-screen relative flex items-center justify-center'>
            <img className='h-full w-full' src={url} />
            <div className='absolute bg-[#0000009e] h-full w-full top-0'></div>

            <div className='textCenter text-center text-white absolute mt-10'>

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
            {/* <FaSquarePhone className='absolute text-5xl lg:text-6xl bottom-3 right-3 text-[#fcda9a]' /> */}
        </div>


    </>
  )
}

export default Herobanner