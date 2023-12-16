import React from 'react'
import img from '../../pizza.png'

const url = 'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Herobanner = (props) => {

  return (
    <>

        <div className='h-[220px] relative'>
            <img className='h-full w-full' src={url} />
            <div className='absolute bg-[#0000009e] h-full w-full top-0'></div>
            
            <div className="absolute bottom-[-60px] w-full h-1/2 flex items-center justify-center">
        <img
          className="w-32 bg-white rounded-3xl"
          src={img}
          alt="Centered Image"
        />
      </div>
        </div>


    </>
  )
}

export default Herobanner