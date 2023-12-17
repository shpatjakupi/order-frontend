import React from 'react'
import img from '../../pizza.png'

const url = 'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Herobanner = (props) => {

  return (
    <>

        <div className='h-[320px] relative'>
            <img className='h-full w-full object-cover' src={url} />
            <div className='absolute bg-[#0000009e] h-full w-full top-0'></div>

            <div className='absolute left-5 bottom-10 text-white'>
              <h1 className='text-4xl lg:text-5xl font-semibold'>BEHOV Pizza Rentemestervej</h1>
              <p className='py-3 text-lg'>Mundvandsdrivende pizza</p>

              <div className='flex gap-2 items-center'>
                <p className='bg-white text-black rounded-md px-2 py-1 text-sm'>Levering: 59,00 kr.</p>
                <p className='bg-white text-black rounded-md px-2 py-1 text-sm'>Minimum ordre: 75,00 kr.</p>
                <p className='bg-white text-black rounded-md px-2 py-1 text-sm'>Levering: 35-45 min.</p>
              </div>
            </div>

        </div>


    </>
  )
}

export default Herobanner