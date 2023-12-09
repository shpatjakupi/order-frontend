import React from 'react'
import { GiKnifeFork } from "react-icons/gi";

const url = 'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Herobanner = () => {

  return (
    <>

        <div className='h-[500px] lg:h-screen relative flex items-center justify-center'>
            <img className='h-full w-full' src={url} />
            <div className='absolute bg-[#0000008a] h-full w-full top-0'></div>

            <div className='textCenter text-center text-white absolute'>

                <p className='text-xl text-[#fcda9a]'>Discover</p>
                <h1 className='text-8xl'>Royal Plate</h1>

                <div className='knifeAndLines my-4 flex items-center justify-center'>
                    
                    <div className='lines'>
                    <p className='border-b border-2 w-10 mb-1'></p>
                    <p className='border-b border-2 w-14'></p>
                    </div>

                    <GiKnifeFork className='text-6xl text-[#fcda9a]' />

                    <div className=''>
                    <p className='border-b border-2 w-10 mb-1'></p>
                    <p className='border-b border-2 w-14'></p>
                    </div>

                </div>

                <div className='openingHours bg-opacity-80 backdrop-blur-md p-4 rounded-3xl w-fit m-auto'>
                    <p className='mb-2 text-lg font-semibold border-b pb-1'>Opening Hours</p>

                    <div>
                        <p>Monday - Friday: <span className=' text-teal-500'>14.00 - 22.00</span></p>
                    </div>

                    <div>
                        <p>Weekend: <span className=' text-teal-500'>11.00 - 23.00</span></p>
                    </div>
                </div>

            </div>
        </div>


    </>
  )
}

export default Herobanner