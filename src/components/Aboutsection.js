import React from 'react'
import { GoDotFill } from "react-icons/go";

const url = 'https://www.pixel-industry.com/html/royal-plate/img/pics/spices-left.png';

const url2 = 'https://www.pixel-industry.com/html/royal-plate/img/pics/spices-right.png'



const Aboutsection = () => {
  return (
    <div className='flex justify-between py-12 max-w-[65rem] md:px-12 lg:m-auto'>

        <div className='hidden md:block md:w-1/4'>
            <img className='w-full' src={url} />
        </div>

        <div className='text-center w-full md:w-1/2  shadow-xl border-[15px] border-[#131822] px-8 lg:px-[40px] mx-3 lg:mx-14 py-8' style={{backgroundImage: 'url(https://www.pixel-industry.com/html/royal-plate/img/pics/bkg-img2.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
            <p className='text-md font-semibold text-[#b48c80]'>Our story</p>
            <h2 className='text-2xl font-bold uppercase'>LOVE FOR FOOD</h2>
            <div className='flex items-center justify-center mt-2'>
            <p className="border-b  border-black w-10"></p>
            <GoDotFill className='text-sm' />
            <p className="border-b  border-black w-10"></p>
            </div>

            <p className='mt-3 font-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>

        <div className='hidden md:block md:w-1/4'>
        <img className='w-full' src={url2} />
        </div>

    </div>
  )
}

export default Aboutsection