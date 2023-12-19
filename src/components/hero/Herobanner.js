import React from 'react'
import img from '../../pizza.png'

const url = 'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Herobanner = (props) => {

  return (
    <>

        <div className='h-[200px] md:h-[260px] relative wrapper'>
            <img className='h-full w-full object-cover' src={url} />
            <div className='absolute bg-[#0000009e] h-full w-full top-0'></div>

            <div className='absolute left-5 right-5 bottom-[70px] lg:bottom-16 text-white'>
              <h1 className='text-2xl lg:text-5xl font-semibold'>BEHOV Pizza Rentemestervej</h1>
              <p className='py-3 text-md lg:text-lg'>Mundvandsdrivende pizza</p>

            </div>

          <div className="absolute bottom-[-34px] w-full flex items-center justify-center">
            <img
              className="w-20 bg-white rounded-3xl"
              src={img}
              alt="Centered Image"
            />
          </div>

        </div>



    </>
  )
}

export default Herobanner