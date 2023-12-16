import React from 'react'
import {Tooltip, Button} from "@nextui-org/react";
import { MdOutlineHandyman } from "react-icons/md";
import { BiWindowOpen } from "react-icons/bi";
import { IoIosBicycle } from "react-icons/io";

const About = (props) => {
  return (

    <div className='textCenter text-white bg-[#030303] px-3 pt-20 py-4'>

        <div className='flex justify-between items-center mb-3'>
            <p className='bg-black text-white rounded-full p-2'> 8.6 </p>
            <p>Åbent indtil 22.00</p>
            <p>Smiley info</p>
        </div>

        <div className='flex justify-between items-center'>
            <Button size='md' endContent={<IoIosBicycle className='text-2xl'/>} className='bg-[#fcda9a] text-black rounded w-[75%]'>Levering 60-70 min.</Button>
            <div className='flex'>
            <MdOutlineHandyman className='bg-[#fcda9a] text-black text-4xl p-1 rounded mr-2' />
            <BiWindowOpen className='bg-[#fcda9a] text-black text-4xl p-1 rounded' />
            </div>
        </div>

        <div className='bg-[#fcda9a] text-center text-black py-4 px-2 w-full rounded mt-7'>Gratis levering</div>

        <p className='text-center mt-3'>Se alle tilbud</p>

    </div>
  )
}

export default About